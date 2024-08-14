import { create } from "zustand";

interface MatchCounterState {
  matchCount: number;
  increment: () => void;
  reset: () => void;
}

const useMatchCounterStore = create<MatchCounterState>((set) => ({
  matchCount: 1,
  increment: () => set((state) => ({ matchCount: state.matchCount + 1 })),
  reset: () => set({ matchCount: 0 }),
}));

export default useMatchCounterStore;
