import crypto from 'crypto';

export class OpportunityLockManager {
  static generateHash(itemName: string, price: number): string {
    return crypto
      .createHash('md5')
      .update(`${itemName}-${price}`)
      .digest('hex');
  }
}
