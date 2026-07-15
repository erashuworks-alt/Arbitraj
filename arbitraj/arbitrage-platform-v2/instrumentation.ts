import { setupSchedulers } from '@/lib/scheduler';

export function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    setupSchedulers();
  }
}
