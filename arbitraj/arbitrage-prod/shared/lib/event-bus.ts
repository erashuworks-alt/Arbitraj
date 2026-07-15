import axios from 'axios';
import { workerLogger } from '../infra/logger';

export enum DomainEvent {
    MARKET_UPDATED = 'MARKET_UPDATED',
    OPPORTUNITY_DETECTED = 'OPPORTUNITY_DETECTED',
    TRADE_EXECUTED = 'TRADE_EXECUTED',
    RISK_TRIGGERED = 'RISK_TRIGGERED'
}

const client = axios.create({ timeout: 2000 });

export class DomainEventBus {
  private static HUB_URL = 'http://localhost:3005/publish';

  /**
   * Async fire-and-forget publish — never blocks the caller
   */
  static publish(event: DomainEvent, payload: any): void {
    client.post(this.HUB_URL, { event, payload }).catch((e) => {
      workerLogger.error({ event, msg: e.message }, 'EventBus: publish failed');
    });
  }
}
