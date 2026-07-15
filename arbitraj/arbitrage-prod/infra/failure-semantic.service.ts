export enum ErrorCategory {
    NETWORK = 'NETWORK',
    AUTH = 'AUTH',
    RATE_LIMIT = 'RATE_LIMIT',
    DATABASE = 'DATABASE',
    UNKNOWN = 'UNKNOWN'
}

export class FailureSemanticService {
  static categorize(error: string): ErrorCategory {
    const msg = error.toUpperCase();
    if (msg.includes('TIMEOUT') || msg.includes('ECONN') || msg.includes('NETWORK')) return ErrorCategory.NETWORK;
    if (msg.includes('403') || msg.includes('AUTH') || msg.includes('FORBIDDEN')) return ErrorCategory.AUTH;
    if (msg.includes('429') || msg.includes('RATE') || msg.includes('LIMIT')) return ErrorCategory.RATE_LIMIT;
    if (msg.includes('PRISMA') || msg.includes('SQLITE') || msg.includes('DATABASE')) return ErrorCategory.DATABASE;
    return ErrorCategory.UNKNOWN;
  }

  static calculateConfidence(count: number, uniqueMessages: number): number {
    const consistency = (count - (uniqueMessages - 1)) / count;
    return Math.floor(Math.max(0, consistency * 100));
  }
}
