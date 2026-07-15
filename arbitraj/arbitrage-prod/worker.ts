import { workerLogger } from './shared/infra/logger';
import prisma from './shared/infra/prisma';
import { config } from './shared/infra/config';
import express from 'express';
import axios from 'axios';

const app = express();
app.get('/health', (req, res) => res.json({ status: 'ok', service: 'worker' }));
app.listen(config.ports.worker, () => {
    workerLogger.error(`WORKER: health check active on port ${config.ports.worker}`);
});

async function runWorker() {
  workerLogger.error('WORKER: Background tasks started');

  // Hourly Maintenance
  setInterval(async () => {
    try {
      const staleItems = await prisma.item.deleteMany({
        where: { last_api_timestamp: { lt: new Date(Date.now() - 24 * 60 * 60 * 1000) } }
      });
      if (staleItems.count > 0) workerLogger.info({ count: staleItems.count }, 'Cleanup: Removed stale market data');
    } catch (e) {}
  }, 3600000); 

  // RECONCILIATION LOOP (Queue Persistence)
  // Scans for PENDING events older than 30s and re-publishes them
  setInterval(async () => {
      try {
          const stalled = await prisma.streamingEvent.findMany({
              where: {
                  status: 'PENDING',
                  created_at: { lt: new Date(Date.now() - 30000) } // older than 30s
              },
              take: 50
          });

          if (stalled.length > 0) {
              workerLogger.warn({ count: stalled.length }, 'Worker: Reconciling stalled events');
              for (const event of stalled) {
                  const payload = JSON.parse(event.payload);
                  await axios.post(`${config.urls.eventHub}/publish`, { event: event.type, payload }).catch(() => {});
              }
          }
      } catch (e) {
          workerLogger.error('Worker: Reconciliation failed');
      }
  }, 10000); // Check every 10s
}

runWorker();
