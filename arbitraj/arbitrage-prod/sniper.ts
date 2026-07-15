import { ArbitrageService } from './domains/arbitrage/arbitrage.service';
import { ExecutionService } from './domains/execution/execution.service';
import { DomainEventBus, DomainEvent } from './shared/lib/event-bus';
import { config } from './shared/infra/config';
import { workerLogger } from './shared/infra/logger';
import express from 'express';

const app = express();
app.use(express.json());

app.get('/health', (req, res) => res.json({ status: 'ok', service: 'sniper', riskLevel: currentRiskLevel }));

const steamMasterCache = new Map<string, { price: number; volume: number }>([
    ["AK-47 | Redline (Field-Tested)", { price: 20, volume: 150 }],
    ["AWP | Asiimov (Field-Tested)", { price: 120, volume: 45 }],
]);

let currentRiskLevel = 'LOW';

const priceHistory = new Map<string, number[]>();

app.post('/trigger', (req, res) => {
    const { event, payload } = req.body;
    res.sendStatus(200);

    if (event === 'RISK_TRIGGERED') {
        currentRiskLevel = payload.riskLevel;
        return;
    }

    if (event !== 'MARKET_UPDATED') return;

    for (const item of payload.items) {
        const sItem = steamMasterCache.get(item.item_name);
        if (!sItem) continue;

        // MULTI-SIGNAL VALIDATION
        const history = priceHistory.get(item.item_name) || [];
        history.push(item.price);
        if (history.length > 5) history.shift();
        priceHistory.set(item.item_name, history);

        // Signal 1: Profitability
        const check = ArbitrageService.calculateOpportunity(sItem.price, item.price, sItem.volume);
        if (!check.is_viable) continue;

        // Signal 2: Price Stability (son 5 tick'te sapma < %2 olmalı)
        const isStable = history.length >= 3 && history.every(p => Math.abs(p - item.price) / item.price < 0.02);
        if (!isStable) {
            workerLogger.info({ item: item.item_name }, 'Sniper: Rejected - Price Instability');
            continue;
        }

        // Signal 3: Latency check
        const latency = Date.now() - (item.timestamp || Date.now());
        if (latency > config.execution.maxLatency) {
            workerLogger.info({ item: item.item_name, latency }, 'Sniper: Rejected - High Latency');
            continue;
        }

        // SAFE MODE FALLBACK
        if (currentRiskLevel === 'CRITICAL') {
            const isSafe = check.profit_percent > config.thresholds.sniperSafeModeProfit;
            if (!isSafe) continue;
        }

        ExecutionService.executeTrade(item.item_name, sItem.price, item.price).then(trade => {
            if (trade?.success) {
                DomainEventBus.publish(DomainEvent.TRADE_EXECUTED, { 
                    item_name: item.item_name, 
                    trade_id: trade.id,
                    profit: check.net_profit 
                });
            }
        }).catch(() => {});
    }
});

app.listen(config.ports.sniper, () => {
    workerLogger.error(`SNIPER: active on port ${config.ports.sniper}`);
});
