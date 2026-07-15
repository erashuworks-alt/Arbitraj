import { EventEmitter } from 'events';

export enum MarketEventType {
    OPPORTUNITY_DETECTED = 'OPPORTUNITY_DETECTED',
    MARKET_PULSE = 'MARKET_PULSE',
    OPPORTUNITY_EXPIRED = 'OPPORTUNITY_EXPIRED',
    TRADE_EXECUTED = 'TRADE_EXECUTED',
    RISK_TRIGGERED = 'RISK_TRIGGERED'
}

class MarketEvents extends EventEmitter {
    dispatch(type: MarketEventType, payload: any) {
        this.emit('global_event', { type, payload });
        this.emit(type, payload);
    }
}

const marketEvents = new MarketEvents();
marketEvents.setMaxListeners(100);

export default marketEvents;
