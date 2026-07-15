import { config } from '../../shared/infra/config';

export class ArbitrageService {
  /**
   * Accurate Net Profit calculation including fees
   */
  static calculateOpportunity(buyPrice: number, sellPrice: number, volume: number) {
    const { buyFee, sellFee, withdrawalFee, networkFee } = config.fees;

    // netProfit = sellPrice * (1 - sellFee) - buyPrice * (1 + buyFee) - withdrawalFee - networkFee;
    const grossSell = sellPrice * (1 - sellFee);
    const totalBuy = buyPrice * (1 + buyFee);
    
    const netProfit = grossSell - totalBuy - withdrawalFee - networkFee;
    const profitPercent = (netProfit / totalBuy) * 100;

    // Slippage estimation (stub for orderbook integration)
    const slippageEstimate = 0.01; // 1% default

    return {
      net_profit: Math.round(netProfit * 100) / 100,
      profit_percent: Math.round(profitPercent * 100) / 100,
      slippage_estimate: slippageEstimate,
      is_viable: netProfit > config.execution.minProfitAmount && 
                 volume >= config.execution.minVolume &&
                 slippageEstimate <= config.execution.maxSlippage
    };
  }
}
