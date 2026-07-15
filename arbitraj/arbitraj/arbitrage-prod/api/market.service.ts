import axios from 'axios';
import axiosRetry from 'axios-retry';
import prisma from '../infra/lib/prisma';
import { workerLogger } from '../infra/lib/logger';

let failureCount = 0;
let circuitOpenUntil = 0;
let lastRequestTime = 0;

const MIN_REQUEST_INTERVAL = 25000;
const MAX_FAILURES = 2;
const COOLDOWN_MS = 10 * 60 * 1000;

const client = axios.create({ timeout: 10000 });

axiosRetry(client, {
  retries: 3,
  retryDelay: axiosRetry.exponentialDelay,
  retryCondition: (error) => {
    return axiosRetry.isNetworkOrIdempotentRequestError(error) || error.response?.status === 429;
  }
});

export class MarketService {
  private static CSFLOAT_API = 'https://csfloat.com/api/v1/listings';

  static isCSFloatBlocked(): boolean {
    return Date.now() < circuitOpenUntil;
  }

  static async fetchSteamData() {
    return [
      { item_name: "AK-47 | Redline (Field-Tested)", price: 20, volume: 150 },
      { item_name: "AWP | Asiimov (Field-Tested)", price: 120, volume: 45 },
      { item_name: "M4A1-S | Printstream (Minimal Wear)", price: 85, volume: 30 },
      { item_name: "Glock-18 | Candy Apple (Factory New)", price: 0.50, volume: 500 },
      { item_name: "Desert Eagle | Blaze (Factory New)", price: 650, volume: 5 }
    ];
  }

  static async fetchCSFloatData() {
    const now = Date.now();
    const apiKey = process.env.CSFLOAT_API_KEY;

    if (apiKey && !this.isCSFloatBlocked()) {
      const timeSinceLast = now - lastRequestTime;
      if (timeSinceLast >= MIN_REQUEST_INTERVAL) {
        lastRequestTime = now;
        try {
          const response = await client.get(this.CSFLOAT_API, {
            params: { limit: 50, sort_by: 'lowest_price' },
            headers: { 'Authorization': apiKey }
          });
          failureCount = 0;
          return response.data.map((i: any) => ({ item_name: i.item.market_hash_name, price: i.price / 100 }));
        } catch (error: any) {
          const status = error.response?.status;
          if (status === 403 || status === 429) {
            failureCount++;
            if (failureCount >= MAX_FAILURES) circuitOpenUntil = Date.now() + COOLDOWN_MS;
          }
        }
      }
    }

    const cached = await prisma.item.findMany({
        where: { last_api_timestamp: { gte: new Date(Date.now() - 6 * 60 * 60 * 1000) } }
    });
    return cached.map(i => ({ item_name: i.item_name, price: i.csfloat_price }));
  }
}
