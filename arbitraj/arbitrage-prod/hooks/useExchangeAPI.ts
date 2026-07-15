import { useMemo } from 'react';
import { useAppStore } from '@/store/useAppStore';
import { LiveExchangeAPI, DemoExchangeAPI, ExchangeAPI } from '@/lib/api/exchange';

export function useExchangeAPI(): ExchangeAPI {
  const { appMode } = useAppStore();

  const api = useMemo(() => {
    if (appMode === 'demo') {
      return new DemoExchangeAPI();
    }
    return new LiveExchangeAPI();
  }, [appMode]);

  return api;
}
