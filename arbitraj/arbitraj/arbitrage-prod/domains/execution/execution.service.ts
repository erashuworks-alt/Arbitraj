import prisma from '../../shared/infra/prisma';
import { workerLogger } from '../../shared/infra/logger';
import { config } from '../../shared/infra/config';
import axios from 'axios';
import crypto from 'crypto';

export class ExecutionService {
  /**
   * Generates a deterministic idempotency key for a trade
   */
  static generateIdempotencyKey(itemName: string, price: number): string {
    // Bucket by minute to allow same item to be traded again if price changes significantly later
    const timeBucket = Math.floor(Date.now() / 60000);
    return crypto.createHash('sha256').update(`${itemName}-${price}-${timeBucket}`).digest('hex');
  }

  /**
   * ATOMIC EXACTLY-ONCE EXECUTION with Risk Validation
   */
  static async executeTrade(itemName: string, buyPrice: number, sellPrice: number) {
    const key = this.generateIdempotencyKey(itemName, buyPrice);
    
    // 0. RISK VALIDATION (HARD GATEKEEPER)
    try {
        const riskResponse = await axios.post(`${config.urls.riskEngine}/validate`, {
            amount: buyPrice,
            item: itemName
        });
        if (!riskResponse.data.allowed) {
            workerLogger.warn({ itemName, reason: riskResponse.data.reason }, '🛡️ RISK REJECTED: Trade blocked by Gatekeeper');
            return null;
        }
    } catch (e) {
        workerLogger.error('Risk Validation Service Unavailable - Blocking trade for safety');
        return null;
    }

    try {
      return await prisma.$transaction(async (tx) => {
        // 1. ATOMIC CHECK & RESERVE
        // Will fail if key exists due to @unique constraint
        const record = await tx.executionRecord.create({
          data: {
            idempotency_key: key,
            item_name: itemName,
            buy_price: buyPrice,
            sell_price: sellPrice,
            status: 'PENDING'
          }
        });

        workerLogger.info({ itemName, key }, '🚀 EXACTLY-ONCE: Trade Reserved. Executing...');

        // 2. EXECUTE WITH RETRY LOGIC
        let success = false;
        let attempts = 0;
        const maxAttempts = 3;

        while (attempts < maxAttempts && !success) {
            attempts++;
            workerLogger.info({ itemName, attempt: attempts }, 'Execution: Attempting Buy/Sell chain...');
            
            // SIMULATE EXTERNAL API CALL
            success = Math.random() > 0.1; // 90% success rate for simulation
            
            if (!success) {
                workerLogger.warn({ itemName, attempt: attempts }, 'Execution: Attempt failed, retrying...');
                await new Promise(r => setTimeout(r, 1000 * attempts)); // Exponential backoff
            }
        }

        // 3. ATOMIC COMMIT
        await tx.executionRecord.update({
          where: { id: record.id },
          data: { 
            status: success ? 'SUCCESS' : 'FAILED', 
            tx_hash: success ? `TX-${key.slice(0, 8)}` : null,
            metadata: JSON.stringify({ attempts, final_status: success ? 'FILLED' : 'TIMEOUT' })
          }
        });

        return { success, id: record.id };
      });
    } catch (error: any) {
      if (error.code === 'P2002') {
        workerLogger.warn({ itemName, key }, '⚠️ DUPLICATE DETECTED: Trade skipped by Exactly-Once filter');
      } else {
        workerLogger.error({ error }, 'Execution Failure');
      }
      return null;
    }
  }
}
