import { workerLogger } from '../../shared/infra/logger';
import prisma from '../../shared/infra/prisma';

export class RiskService {
  private static health = 100;

  static async getBackpressureFactor(count: number, threshold: number): Promise<number> {
    const base = count === 0 ? 1.0 : Math.min(10.0, 1.0 + (count / (threshold / 5)));
    const healthMult = this.health < 50 ? 2.0 : 1.0;
    return base * healthMult;
  }

  static recordFailure(confidence: number) {
    this.health = Math.max(0, this.health - (confidence / 5));
    workerLogger.warn({ health: this.health }, 'Risk Domain: Health Degraded');
  }

  static recover() {
    this.health = Math.min(100, this.health + 2);
  }

  static getHealth() { return this.health; }
}
