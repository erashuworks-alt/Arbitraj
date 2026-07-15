import prisma from './lib/prisma';
import axios from 'axios';
import { workerLogger } from './lib/logger';
import { FailureSemanticService, ErrorCategory } from './failure-semantic.service';
import { DegradationService } from './degradation.service';

export class StreamingQueueService {
  private static BASE_THRESHOLD = 50;
  private static PRIORITY_PERCENTILE = 80;
  
  private static activeDeliveries = { HIGH: 0, MEDIUM: 0, LOW: 0 };
  private static MAX_CONCURRENT_HIGH = 15;
  private static recentFailures = 0;
  private static recentAttempts = 0;

  private static semanticClusters = new Map<ErrorCategory, { count: number, uniqueMsgs: Set<string>, lastSeen: number }>();
  private static signals = { ERROR_CLUSTER: false, LATENCY_SPIKE: false, RETRY_STORM: false };

  static async attemptDelivery(eventId: string, targetUrl: string) {
    const event = await prisma.streamingEvent.findUnique({ where: { id: eventId } });
    if (!event || event.status === 'SENT') return;

    const dropProb = DegradationService.getDropProbability();
    if (event.priority !== 'HIGH' && Math.random() < dropProb) return;

    const priority = (event.priority as 'HIGH' | 'MEDIUM' | 'LOW');
    if (priority === 'HIGH' && this.activeDeliveries.HIGH >= this.MAX_CONCURRENT_HIGH) {
        setTimeout(() => this.attemptDelivery(eventId, targetUrl), 100);
        return;
    }

    const startTime = Date.now();
    try {
      this.activeDeliveries[priority]++;
      this.recentAttempts++;
      await axios.post(targetUrl, JSON.parse(event.payload));
      this.signals.LATENCY_SPIKE = (Date.now() - startTime) > 2000;
      await prisma.streamingEvent.update({ where: { id: eventId }, data: { status: 'SENT' } });
      await this.recordPerformance(300, true);
      this.evaluateConsensus();
    } catch (error: any) {
      this.recentFailures++;
      await this.processSemanticFailure(error.message || 'Unknown');
      const nextRetry = event.retry_count + 1;
      const jitterRange = await this.getAdaptiveJitterRange();
      const backoffMs = priority === 'HIGH' ? (300 + Math.floor(Math.random() * 100) - 50) : (((Math.pow(2, nextRetry) * 1000) + Math.floor(Math.random() * jitterRange.max)) * DegradationService.getDegradationMultiplier());
      await this.recordPerformance(jitterRange.max, false);
      await prisma.streamingEvent.update({ where: { id: eventId }, data: { retry_count: nextRetry, status: nextRetry > 5 ? 'FAILED' : 'PENDING' } });
      this.evaluateConsensus();
      if (nextRetry <= 5) setTimeout(() => this.attemptDelivery(eventId, targetUrl), backoffMs);
    } finally {
      this.activeDeliveries[priority]--;
    }
  }

  private static async evaluateConsensus() {
    this.signals.RETRY_STORM = this.recentAttempts > 10 && (this.recentFailures / this.recentAttempts) > 0.3;
    if (Object.values(this.signals).filter(v => v).length >= 2) {
        DegradationService.recordFailure(80);
    } else {
        DegradationService.recover();
    }
  }

  private static async processSemanticFailure(error: string) {
    const category = FailureSemanticService.categorize(error);
    const now = Date.now();
    const cluster = this.semanticClusters.get(category) || { count: 0, uniqueMsgs: new Set<string>(), lastSeen: now };
    if (now - cluster.lastSeen > 60000) { cluster.count = 0; cluster.uniqueMsgs.clear(); }
    cluster.count++;
    cluster.uniqueMsgs.add(error);
    cluster.lastSeen = now;
    this.semanticClusters.set(category, cluster);
    this.signals.ERROR_CLUSTER = cluster.count >= 25 && FailureSemanticService.calculateConfidence(cluster.count, cluster.uniqueMsgs.size) >= 70;
  }

  private static async getAdaptiveJitterRange() {
    const performance = await prisma.retryPerformance.findFirst({ orderBy: { success_count: 'desc' }, where: { failure_count: { lt: 10 } } });
    const efficiency = (performance?.success_count || 0) > 20 ? 0.7 : 1.0;
    const stretch = (1.0 + ((this.activeDeliveries.HIGH + this.activeDeliveries.MEDIUM) / 10) + ((this.recentFailures / (this.recentAttempts || 1)) * 5)) * efficiency;
    return { min: 300, max: Math.min(5000, Math.floor(900 * stretch)) };
  }

  private static async recordPerformance(range: number, success: boolean) {
    const bucket = Math.floor(range / 500) * 500;
    await prisma.retryPerformance.upsert({
      where: { delay_range: bucket },
      update: { success_count: { increment: success ? 1 : 0 }, failure_count: { increment: success ? 0 : 1 }, updated_at: new Date() },
      create: { delay_range: bucket, success_count: success ? 1 : 0, failure_count: success ? 0 : 1 }
    });
  }

  static async enqueueDynamic(type: string, payload: any, targetUrl: string, partition: number, score: number) {
    const priority = score >= this.PRIORITY_PERCENTILE ? 'HIGH' : 'MEDIUM';
    const event = await prisma.streamingEvent.create({ data: { type, partition, priority, score, payload: JSON.stringify(payload), status: 'PENDING' } });
    return this.attemptDelivery(event.id, targetUrl);
  }

  static async isCongested(partition: number): Promise<boolean> {
    const hour = new Date().getHours();
    const pattern = await prisma.loadPattern.findUnique({ where: { hour } });
    const threshold = Math.floor((pattern?.peak_load || this.BASE_THRESHOLD) * (hour >= 18 && hour <= 22 ? 1.5 : 1.0));
    const count = await prisma.streamingEvent.count({ where: { partition, status: 'PENDING', priority: { in: ['MEDIUM', 'LOW'] } } });
    return count >= threshold;
  }

  static async getBackpressureFactor(partition: number, priority: string = 'MEDIUM'): Promise<number> {
    if (priority === 'HIGH') return 1.0;
    const count = await prisma.streamingEvent.count({ where: { partition, status: 'PENDING', priority: { in: ['MEDIUM', 'LOW'] } } });
    return (count === 0 ? 1.0 : Math.min(10.0, 1.0 + (count / 10))) * DegradationService.getDegradationMultiplier();
  }

  static async startReconciliation(targetUrl: string) {
    setInterval(async () => {
      const stalled = await prisma.streamingEvent.findMany({ where: { status: 'PENDING', updated_at: { lt: new Date(Date.now() - 30000) } } });
      for (const event of stalled) this.attemptDelivery(event.id, targetUrl);
    }, 30000);
  }
}
