import { AppMode } from '@/store/useAppStore';

/**
 * Returns the current application mode with a safe fallback to 'live'.
 */
export function getSafeAppMode(mode: AppMode | undefined): AppMode {
  if (!mode || mode === undefined) return 'live';
  return mode;
}

/**
 * Utility to check if specific features should be enabled based on mode.
 */
export const ModeGuard = {
  canExecuteTrade: (mode: AppMode) => getSafeAppMode(mode) === 'live',
  canWithdraw: (mode: AppMode) => getSafeAppMode(mode) === 'live',
  isSimulation: (mode: AppMode) => getSafeAppMode(mode) === 'demo',
};
