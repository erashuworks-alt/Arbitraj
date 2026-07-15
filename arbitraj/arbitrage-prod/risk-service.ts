import express from 'express';
import { DomainEventBus, DomainEvent } from './shared/lib/event-bus';
import { workerLogger } from './shared/infra/logger';
import { config } from './shared/infra/config';

const app = express();
app.use(express.json());

let healthScore = 100;
let riskLevel: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL' = 'LOW';

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'risk-service', healthScore, riskLevel }));

app.post('/validate', (req, res) => {
    const { amount, item } = req.body;
    
    // Hard gatekeeper logic
    if (riskLevel === 'CRITICAL') return res.status(403).json({ allowed: false, reason: 'SYSTEM_CRITICAL_RISK' });
    
    // Simulate balance check
    const userBalance = 500; // Mock balance
    if (amount > userBalance) return res.status(403).json({ allowed: false, reason: 'INSUFFICIENT_FUNDS' });

    // Simulate KYC/Trade Lock check
    const isLocked = false; 
    if (isLocked) return res.status(403).json({ allowed: false, reason: 'TRADE_LOCK_ACTIVE' });

    return res.json({ allowed: true });
});

app.post('/events', async (req, res) => {
    const { event, payload } = req.body;
    
    if (event === 'SYSTEM_ERROR') {
        healthScore = Math.max(0, healthScore - 10);
        evaluateRisk();
    }

    if (event === 'MARKET_UPDATED') {
        const priceSpike = payload.items.some((i: any) => Math.abs(i.price_change || 0) > 50);
        if (priceSpike) healthScore = Math.max(0, healthScore - 5);
        evaluateRisk();
    }

    res.sendStatus(200);
});

function evaluateRisk() {
    const oldLevel = riskLevel;
    
    if (healthScore > 80) riskLevel = 'LOW';
    else if (healthScore > 50) riskLevel = 'MEDIUM';
    else if (healthScore > 20) riskLevel = 'HIGH';
    else riskLevel = 'CRITICAL';

    setTimeout(() => { healthScore = Math.min(100, healthScore + 1); }, 10000);

    if (oldLevel !== riskLevel) {
        workerLogger.warn({ riskLevel, healthScore }, 'Risk Engine: Threshold Shift Detected');
        DomainEventBus.publish(DomainEvent.RISK_TRIGGERED, { riskLevel, healthScore });
    }
}

app.listen(config.ports.riskEngine, () => {
    workerLogger.error(`RISK ENGINE: active on port ${config.ports.riskEngine}`);
});
