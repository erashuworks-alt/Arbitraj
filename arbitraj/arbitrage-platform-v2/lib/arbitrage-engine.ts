/**
 * Arbitrage Intelligence Platform Engine
 * Implements logic for profit calculation and market analysis.
 */

export interface MarketItem {
  item_name: string;
  steam_price: number;
  csfloat_price: number;
  volume: number;
}

export interface ArbitrageOpportunity {
  item_name: string;
  buy_from: 'Steam' | 'CSFloat';
  sell_to: 'Steam' | 'CSFloat';
  buy_price: number;
  sell_price: number;
  net_profit: number;
  profit_percent: number;
}

const GLOBAL_CONFIG = {
  min_profit_percent: 5,
  min_price_usd: 1,
};

const COMMISSIONS = {
  steam: 0.15, // 15% fee
  csfloat: 0.02, // 2% fee
};

export function calculateArbitrage(item: MarketItem): ArbitrageOpportunity[] {
  const opportunities: ArbitrageOpportunity[] = [];

  // 1. Compute net prices
  const steam_net = item.steam_price * (1 - COMMISSIONS.steam);
  const csfloat_net = item.csfloat_price * (1 - COMMISSIONS.csfloat);

  // 2. Compute profit directions
  // Case A: Buy from Steam, Sell to CSFloat
  const profit_steam_to_csfloat = csfloat_net - item.steam_price;
  const profit_percent_steam = (profit_steam_to_csfloat / item.steam_price) * 100;

  // Case B: Buy from CSFloat, Sell to Steam
  const profit_csfloat_to_steam = steam_net - item.csfloat_price;
  const profit_percent_csfloat = (profit_csfloat_to_steam / item.csfloat_price) * 100;

  // 3. Filter and Add Opportunities
  if (
    profit_percent_steam >= GLOBAL_CONFIG.min_profit_percent &&
    item.steam_price >= GLOBAL_CONFIG.min_price_usd
  ) {
    opportunities.push({
      item_name: item.item_name,
      buy_from: 'Steam',
      sell_to: 'CSFloat',
      buy_price: item.steam_price,
      sell_price: item.csfloat_price,
      net_profit: profit_steam_to_csfloat,
      profit_percent: profit_percent_steam,
    });
  }

  if (
    profit_percent_csfloat >= GLOBAL_CONFIG.min_profit_percent &&
    item.csfloat_price >= GLOBAL_CONFIG.min_price_usd
  ) {
    opportunities.push({
      item_name: item.item_name,
      buy_from: 'CSFloat',
      sell_to: 'Steam',
      buy_price: item.csfloat_price,
      sell_price: item.steam_price,
      net_profit: profit_csfloat_to_steam,
      profit_percent: profit_percent_csfloat,
    });
  }

  return opportunities;
}
