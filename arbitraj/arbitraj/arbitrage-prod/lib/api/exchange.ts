/**
 * ExchangeAPI Interface
 * Unified interface for market operations across Live and Demo modes.
 */
export interface ArbitrageOpportunity {
  id: string;
  asset: string;
  source: string;
  target: string;
  buyPrice: number;
  sellPrice: number;
  profitPercent: number;
  timestamp: number;
}

export interface TradeResult {
  success: boolean;
  orderId?: string;
  message: string;
  mode: 'live' | 'demo';
}

export interface ExchangeAPI {
  getPrices(): Promise<Record<string, number>>;
  getOpportunities(): Promise<ArbitrageOpportunity[]>;
  executeTrade(opportunityId: string, amount: number): Promise<TradeResult>;
}

/**
 * LIVE MODE IMPLEMENTATION
 * Connects to real backend endpoints.
 */
export class LiveExchangeAPI implements ExchangeAPI {
  async getPrices() {
    try {
      const res = await fetch('/api/market/prices');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    } catch (e) {
      console.error('Failed to fetch prices:', e);
      return {};
    }
  }

  async getOpportunities() {
    try {
      const res = await fetch('/api/market/opportunities');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    } catch (e) {
      console.error('Failed to fetch opportunities:', e);
      return [];
    }
  }

  async executeTrade(opportunityId: string, amount: number): Promise<TradeResult> {
    try {
      const res = await fetch('/api/trades/execute', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ opportunityId, amount, dryRun: false }),
      });
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return { ...(await res.json()), mode: 'live' };
    } catch (e) {
      console.error('Failed to execute trade:', e);
      return { success: false, message: 'Network or Server Error', mode: 'live' };
    }
  }
}

/**
 * DEMO MODE IMPLEMENTATION
 * Uses real data but enforces dry-run / simulation.
 */
export class DemoExchangeAPI implements ExchangeAPI {
  async getPrices() {
    try {
      const res = await fetch('/api/market/prices');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    } catch (e) {
      console.error('Failed to fetch prices:', e);
      return {};
    }
  }

  async getOpportunities() {
    try {
      const res = await fetch('/api/market/opportunities');
      if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
      return res.json();
    } catch (e) {
      console.error('Failed to fetch opportunities:', e);
      return [];
    }
  }

  async executeTrade(opportunityId: string, amount: number): Promise<TradeResult> {
    // Enforces dry-run on server OR returns local simulation if server supports flagging
    // This is the CRITICAL safety layer
    console.warn('[DEMO MODE] Trade execution simulated.');
    
    // Simulate network latency for realism
    await new Promise(r => setTimeout(r, 1200));

    return {
      success: true,
      orderId: `DEMO-${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
      message: 'Simulation successful. No real assets were moved.',
      mode: 'demo'
    };
  }
}
