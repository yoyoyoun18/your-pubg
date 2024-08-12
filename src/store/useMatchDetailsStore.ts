import { create } from "zustand";

interface MatchInfo {
  gameId: string;
  // Other fields in the info object...
}

interface MatchDetails {
  info: MatchInfo;
  // Other top-level fields...
}

interface MatchDetailsStore {
  matchDetails: MatchDetails[];
  addMatchDetails: (details: MatchDetails) => void;
  removeMatchDetails: (gameId: string) => void;
  updateMatchDetails: (gameId: string, newDetails: MatchDetails) => void;
}

const useMatchDetailsStore = create<MatchDetailsStore>((set) => ({
  matchDetails: [],

  addMatchDetails: (details) =>
    set((state) => {
      const exists = state.matchDetails.some(
        (match) => match.info.gameId === details.info.gameId
      );
      if (!exists) {
        return { matchDetails: [...state.matchDetails, details] };
      }
      return state;
    }),

  removeMatchDetails: (gameId) =>
    set((state) => ({
      matchDetails: state.matchDetails.filter(
        (match) => match.info.gameId !== gameId
      ),
    })),

  updateMatchDetails: (gameId, newDetails) =>
    set((state) => ({
      matchDetails: state.matchDetails.map((match) =>
        match.info.gameId === gameId ? { ...match, ...newDetails } : match
      ),
    })),
}));

export default useMatchDetailsStore;
