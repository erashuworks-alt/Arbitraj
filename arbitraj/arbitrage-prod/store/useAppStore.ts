import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export type AppMode = 'live' | 'demo';

interface AppState {
  appMode: AppMode;
  setAppMode: (mode: AppMode) => void;
  toggleMode: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      appMode: 'live',
      setAppMode: (mode) => set({ appMode: mode }),
      toggleMode: () => set((state) => ({ appMode: state.appMode === 'live' ? 'demo' : 'live' })),
    }),
    {
      name: 'erashu-app-state',
    }
  )
);
