import { create } from 'zustand';

interface CycleState {
  isActive: boolean;
  startDate: string | null;
  durationDays: number;
  remainingTime: string;
  balance: number;
  platform: 'Steam' | 'CSFloat';
  hasSteamGuard: boolean;
}

interface DashboardStore {
  cycle: CycleState;
  isStartModalOpen: boolean;
  isDemoModalOpen: boolean;
  setStartModalOpen: (open: boolean) => void;
  setDemoModalOpen: (open: boolean) => void;
  startCycle: (data: Partial<CycleState>) => void;
  stopCycle: () => void;
  updateRemainingTime: (time: string) => void;
}

export const useDashboardStore = create<DashboardStore>((set) => ({
  cycle: {
    isActive: false,
    startDate: null,
    durationDays: 7,
    remainingTime: '00:00:00',
    balance: 0,
    platform: 'Steam',
    hasSteamGuard: true,
  },
  isStartModalOpen: false,
  isDemoModalOpen: false,
  setStartModalOpen: (open) => set({ isStartModalOpen: open }),
  setDemoModalOpen: (open) => set({ isDemoModalOpen: open }),
  startCycle: (data) => set((state) => ({
    cycle: { ...state.cycle, ...data, isActive: true }
  })),
  stopCycle: () => set((state) => ({
    cycle: { ...state.cycle, isActive: false }
  })),
  updateRemainingTime: (time) => set((state) => ({
    cycle: { ...state.cycle, remainingTime: time }
  })),
}));
