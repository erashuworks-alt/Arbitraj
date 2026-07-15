/**
 * In-Memory Cache Layer with TTL
 */
interface CacheEntry<T> {
  value: T;
  expiresAt: number;
}

export class MemCache {
  private static store = new Map<string, CacheEntry<any>>();
  private static DEFAULT_TTL_MS = 30000; // 30s default

  static set<T>(key: string, value: T, ttlMs = this.DEFAULT_TTL_MS) {
    this.store.set(key, { value, expiresAt: Date.now() + ttlMs });
  }

  static get<T>(key: string): T | null {
    const entry = this.store.get(key);
    if (!entry) return null;
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }
    return entry.value as T;
  }

  static invalidate(key: string) {
    this.store.delete(key);
  }

  // Evict expired entries periodically
  static startEviction() {
    setInterval(() => {
      const now = Date.now();
      for (const [key, entry] of this.store.entries()) {
        if (now > entry.expiresAt) this.store.delete(key);
      }
    }, 60000);
  }
}
