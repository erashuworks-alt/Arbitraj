import { NextResponse } from 'next/server';
import prisma from '@/infra/lib/prisma';

export async function GET() {
  try {
    const [pendingEvents, failedEvents, recentExecutions, retryPerf] = await Promise.all([
      prisma.streamingEvent.count({ where: { status: 'PENDING' } }),
      prisma.streamingEvent.count({ where: { status: 'FAILED' } }),
      prisma.executionRecord.findMany({ orderBy: { created_at: 'desc' }, take: 50 }),
      prisma.retryPerformance.findMany()
    ]);

    const totalAttempts = recentExecutions.length;
    const successCount = recentExecutions.filter(e => e.status === 'SUCCESS').length;
    const errorRate = totalAttempts > 0 ? ((totalAttempts - successCount) / totalAttempts) * 100 : 0;

    const totalSuccess = retryPerf.reduce((a, r) => a + r.success_count, 0);
    const totalFail = retryPerf.reduce((a, r) => a + r.failure_count, 0);
    const avgLatencyMs = totalSuccess > 0
      ? retryPerf.reduce((a, r) => a + r.delay_range * r.success_count, 0) / totalSuccess
      : 0;

    return NextResponse.json({
      queue_depth: pendingEvents,
      failed_events: failedEvents,
      error_rate: parseFloat(errorRate.toFixed(2)),
      avg_latency_ms: parseFloat(avgLatencyMs.toFixed(0)),
      total_executions: totalAttempts,
      success_executions: successCount,
      rejected_count: 12, // Mocked for now, should come from logs/db
      balance_exchange_a: 420.50,
      balance_exchange_b: 85.20,
    });
  } catch {
    return NextResponse.json({ error: 'health check failed' }, { status: 500 });
  }
}
