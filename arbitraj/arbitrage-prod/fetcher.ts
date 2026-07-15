import { MarketService } from './domains/market/market.service';
import { SnapshotService } from './domains/market/snapshot.service';
import { DomainEventBus, DomainEvent } from './shared/lib/event-bus';
import { MemCache } from './shared/infra/cache';
import { config } from './shared/infra/config';
import { workerLogger } from './shared/infra/logger';
import express from 'express';

MemCache.startEviction();

const app = express();
app.get('/health', (req, res) => res.json({ status: 'ok', service: 'fetcher' }));
app.listen(config.ports.fetcher, () => {
    workerLogger.error(`FETCHER: health check active on port ${config.ports.fetcher}`);
});

async function run() {
  workerLogger.info('FETCHER: Connecting to market via WebSocket foundation...');
  
  // NORMALIZE FUNCTION
  const normalize = (items: any[]) => items.map(item => ({
    ...item,
    timestamp: Date.now(),
    price: parseFloat(item.price),
    volume: parseInt(item.volume) || 0
  }));

  // SIMULATED WS CLIENT (Stub for production WS integration)
  // In a real scenario, this would be: ws.on('message', ...)
  setInterval(async () => {
    try {
      const rawData = await MarketService.fetchCSFloatData();
      if (rawData.length > 0) {
        const normalizedData = normalize(rawData);
        const deltas = await SnapshotService.commit(normalizedData, 0);
        
        if (deltas.length > 0) {
          DomainEventBus.publish(DomainEvent.MARKET_UPDATED, { 
            items: deltas,
            source: 'CSFLOAT_WS_SIM'
          }); 
        }
      }
    } catch (e) {
      workerLogger.error('Fetcher: Data cycle failed');
    }
  }, config.thresholds.fetchInterval);
}

run();
