import { create } from "zustand";

interface MatchCounterState {
  count: number;
  increment: () => void;
  reset: () => void;
}

const useMatchCounterStore = create<MatchCounterState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  reset: () => set({ count: 0 }),
}));

export default useMatchCounterStore;
