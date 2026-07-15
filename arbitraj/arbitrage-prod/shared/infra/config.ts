import dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV || 'development';

export const config = {
  env,
  isProd: env === 'production',
  
  ports: {
    eventHub: parseInt(process.env.HUB_PORT || '3005', 10),
    sniper: parseInt(process.env.SNIPER_PORT || '3001', 10),
    riskEngine: parseInt(process.env.RISK_PORT || '3006', 10),
    fetcher: parseInt(process.env.FETCHER_PORT || '3002', 10),
    worker: parseInt(process.env.WORKER_PORT || '3007', 10),
  },

  urls: {
    eventHub: process.env.HUB_URL || 'http://localhost:3005',
    sniper: process.env.SNIPER_URL || 'http://localhost:3001',
    riskEngine: process.env.RISK_URL || 'http://localhost:3006',
    ui: process.env.UI_URL || 'http://localhost:3000',
  },

  thresholds: {
    sniperSafeModeProfit: parseFloat(process.env.SAFE_MODE_PROFIT || '10'),
    sniperSafeModeIntel: parseFloat(process.env.SAFE_MODE_INTEL || '85'),
    fetchInterval: parseInt(process.env.FETCH_INTERVAL_MS || '25000', 10),
  },

  apiKeys: {
    csfloat: process.env.CSFLOAT_API_KEY || '',
  },

  fees: {
    buyFee: parseFloat(process.env.BUY_FEE || '0.00'), // e.g. 0.05 for 5%
    sellFee: parseFloat(process.env.SELL_FEE || '0.05'),
    withdrawalFee: parseFloat(process.env.WITHDRAWAL_FEE || '0.50'), // Fixed cost
    networkFee: parseFloat(process.env.NETWORK_FEE || '0.10'),
  },

  execution: {
    maxSlippage: parseFloat(process.env.MAX_SLIPPAGE || '0.02'),
    minVolume: parseInt(process.env.MIN_VOLUME || '10', 10),
    minProfitAmount: parseFloat(process.env.MIN_PROFIT_AMOUNT || '1.00'),
    maxLatency: parseInt(process.env.MAX_LATENCY || '200', 10),
  }
};
