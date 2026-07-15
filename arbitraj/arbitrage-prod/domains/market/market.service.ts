import axios from 'axios';
import axiosRetry from 'axios-retry';
import prisma from '../../shared/infra/prisma';
import { workerLogger } from '../../shared/infra/logger';

const client = axios.create({ timeout: 10000 });
axiosRetry(client, { retries: 3, retryDelay: axiosRetry.exponentialDelay });

export class MarketService {
  private static CSFLOAT_API = 'https://csfloat.com/api/v1/listings';

  static async fetchCSFloatData() {
    const apiKey = process.env.CSFLOAT_API_KEY;
    if (!apiKey) return [];
    
    try {
      const response = await client.get(this.CSFLOAT_API, {
        params: { limit: 50, sort_by: 'lowest_price' },
        headers: { 'Authorization': apiKey }
      });
      return response.data.map((i: any) => ({ item_name: i.item.market_hash_name, price: i.price / 100 }));
    } catch (e) { return []; }
  }

  static async fetchSteamData() {
    return [
      { item_name: "AK-47 | Redline (Field-Tested)", price: 20, volume: 150 },
      { item_name: "AWP | Asiimov (Field-Tested)", price: 120, volume: 45 }
    ];
  }
}
