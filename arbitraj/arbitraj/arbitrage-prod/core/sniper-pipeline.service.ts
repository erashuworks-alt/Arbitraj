export class SniperPipelineService {
  /**
   * Fast Arbitrage Check logic (Business Core)
   */
  static fastCheck(steamPrice: number, csfloatPrice: number, volume: number, trend: number) {
    const fee = csfloatPrice * 0.05;
    const netSell = csfloatPrice - fee;
    const profit = netSell - steamPrice;
    const profitPercent = (profit / steamPrice) * 100;

    return {
      profit_percent: Math.round(profitPercent * 100) / 100,
      executable: profitPercent > 5 && volume > 10,
      confidence: volume > 100 ? 'HIGH' : 'MEDIUM'
    };
  }
}
