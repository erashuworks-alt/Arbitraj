import cron from 'node-cron';
import { calculateArbitrage, MarketItem } from './arbitrage-engine';

/**
 * Mock Data Fetcher for Steam and CSFloat
 * In a real scenario, this would call Steam/CSFloat APIs.
 */
async function fetchMarketData(): Promise<MarketItem[]> {
  console.log('[Market Fetch] Fetching data from Steam and CSFloat...');
  
  // Simulated data
  return [
    { item_name: "AK-47 | Slate (Minimal Wear)", steam_price: 12.50, csfloat_price: 14.80, volume: 1500 },
    { item_name: "Desert Eagle | Printstream (Field-Tested)", steam_price: 58.20, csfloat_price: 45.00, volume: 300 },
    { item_name: "M4A1-S | Mecha Industries (Factory New)", steam_price: 32.00, csfloat_price: 38.50, volume: 120 },
  ];
}

export function setupSchedulers() {
  console.log('[Scheduler] Initializing arbitrage platform schedulers...');

  // 1. Market Fetch - Every 30 minutes
  cron.schedule('*/30 * * * *', async () => {
    console.log('[Scheduler] Running market_fetch...');
    try {
      const items = await fetchMarketData();
      const allOpportunities = items.flatMap(calculateArbitrage);
      
      console.log(`[Scheduler] Found ${allOpportunities.length} profitable items.`);
      // Logic to save to DB (profitable_items table) would go here
      
      if (allOpportunities.length > 0) {
        console.log('[Notification] New Profitable Item Found!');
      }
    } catch (error) {
      console.error('[Scheduler] Market fetch failed:', error);
    }
  });

  // 2. Weekly Farm - Every Wednesday at 03:00
  cron.schedule('0 3 * * 3', () => {
    console.log('[Notification] Farm zamanı başladı');
  });

  // 3. Trade Lock 7 - Every day check
  cron.schedule('0 0 * * *', () => {
    console.log('[Notification] Checking trade locks (7 days)...');
  });

  // 4. Trade Lock 15 - Every day check
  cron.schedule('0 0 * * *', () => {
    console.log('[Notification] Checking trade locks (15 days)...');
  });
}
