import prisma from '../../shared/infra/prisma';
import { MemCache } from '../../shared/infra/cache';
import { workerLogger } from '../../shared/infra/logger';

// Batch write buffer
const writeBuffer: Map<string, { item_name: string; price: number }> = new Map();
let flushTimeout: ReturnType<typeof setTimeout> | null = null;
const BATCH_FLUSH_INTERVAL = 500; // ms

function scheduleBatchFlush() {
  if (flushTimeout) return;
  flushTimeout = setTimeout(async () => {
    flushTimeout = null;
    const items = [...writeBuffer.values()];
    writeBuffer.clear();
    if (items.length === 0) return;

    try {
      // Batch upsert with a single transaction
      await prisma.$transaction(
        items.map(item =>
          prisma.item.upsert({
            where: { item_name: item.item_name },
            update: { csfloat_price: item.price, last_api_timestamp: new Date() },
            create: { item_name: item.item_name, csfloat_price: item.price, steam_price: item.price }
          })
        )
      );
    } catch (e) {
      workerLogger.error(e, 'Batch flush failed');
    }
  }, BATCH_FLUSH_INTERVAL);
}

export class SnapshotService {
  static async commit(items: any[], _partition: number) {
    const deltas: any[] = [];
    const CACHE_KEY = 'snapshot:items';

    // Read from cache instead of DB
    const cached = MemCache.get<Record<string, number>>(CACHE_KEY) ?? {};

    for (const item of items) {
      if (cached[item.item_name] !== item.price) {
        deltas.push(item);
        cached[item.item_name] = item.price;
        // Buffer write instead of immediate upsert
        writeBuffer.set(item.item_name, item);
      }
    }

    MemCache.set(CACHE_KEY, cached, 60000);
    scheduleBatchFlush();
    return deltas;
  }
}
