import prisma from './lib/prisma';
import { workerLogger } from './lib/logger';

export class SnapshotService {
  static async commitPartitionedSnapshot(source: string, items: any[], partition: number) {
    const startTime = Date.now();
    const deltas: any[] = [];

    try {
      await prisma.$transaction(async (tx) => {
        for (const item of items) {
          const existing = await tx.item.findUnique({ where: { item_name: item.item_name } });
          
          if (!existing || existing.csfloat_price !== item.price) {
            deltas.push({ item_name: item.item_name, price: item.price });
          }

          await tx.item.upsert({
            where: { item_name: item.item_name },
            update: { csfloat_price: item.price, last_api_timestamp: new Date() },
            create: { item_name: item.item_name, csfloat_price: item.price, steam_price: item.price, last_api_timestamp: new Date() }
          });
        }
      });

      workerLogger.info({ partition, deltas: deltas.length, ms: Date.now() - startTime }, 'Snapshot Committed');
      return deltas;
    } catch (error) {
      workerLogger.error('Snapshot Transaction Failed');
      return [];
    }
  }
}
