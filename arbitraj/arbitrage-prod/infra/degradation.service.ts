import { workerLogger } from './lib/logger';

export class DegradationService {
  private static healthScore = 100;

  static recordFailure(confidence: number) {
    this.healthScore = Math.max(0, this.healthScore - (confidence / 5));
    workerLogger.info({ healthScore: this.healthScore }, 'System Health Degraded');
  }

  static recover() {
    this.healthScore = Math.min(100, this.healthScore + 2);
  }

  static getHealth() { return this.healthScore; }

  static getDropProbability(): number {
    if (this.healthScore > 80) return 0;
    if (this.healthScore < 20) return 0.9;
    return (80 - this.healthScore) / 100;
  }

  static getDegradationMultiplier(): number {
    if (this.healthScore > 90) return 1.0;
    return 1.0 + ((100 - this.healthScore) / 20);
  }
}
