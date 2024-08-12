import { create } from "zustand";

interface Participant {
  puuid: string;
  participantId: number;
  summonerName: string;
  championId: number;
  assists: number;
  kills: number;
  deaths: number;
  largestMultiKill: number;
  teamId: number;
  items: [];
  item0: number;
  item1: number;
  item2: number;
  item3: number;
  item4: number;
  item5: number;
  championName: string;
  win: boolean;
}

interface MatchInfo {
  gameId: string;
  participants: Participant[];
  gameDuration: number;
}

interface MatchDetails {
  info: MatchInfo;
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
