import { workerLogger } from '../infra/lib/logger';

interface PriceHistory {
    price: number;
    timestamp: number;
}

export class NoiseFilterService {
  private static history = new Map<string, PriceHistory[]>();
  private static OSCILLATION_WINDOW_MS = 60000;
  private static MAX_OSCILLATIONS = 3;

  static isLegitimate(itemName: string, newPrice: number, volume: number): boolean {
    if (volume < 5) return false;

    const now = Date.now();
    let itemHistory = this.history.get(itemName) || [];
    itemHistory = itemHistory.filter(h => now - h.timestamp < this.OSCILLATION_WINDOW_MS);
    
    const rapidFlips = itemHistory.filter((h, idx) => {
        if (idx === 0) return false;
        const prev = itemHistory[idx-1];
        return (h.price > prev.price && newPrice < h.price) || 
               (h.price < prev.price && newPrice > h.price);
    });

    if (rapidFlips.length >= this.MAX_OSCILLATIONS) {
        workerLogger.error({ itemName }, 'Noise Filter: Bot Oscillation Blocked');
        return false;
    }

    itemHistory.push({ price: newPrice, timestamp: now });
    this.history.set(itemName, itemHistory.slice(-5));
    return true;
  }
}
