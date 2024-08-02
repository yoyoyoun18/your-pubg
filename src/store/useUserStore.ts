import { create } from "zustand";

interface TargetUser {
  puuid: string;
  gameName: string;
  tagLine: string;
  encryptedId: string;
  accountId: string;
  profileIconId: number;
  revisionDate: number;
  summonerLevel: number;
  tier: string;
  leaguePoints: number;
  wins: number;
  loses: number;
  [key: string]: any;
}

interface UserStoreState {
  targetUser: TargetUser;
  setTargetUser: (newUser: Partial<TargetUser>) => void;
}

const useUserStore = create<UserStoreState>((set) => ({
  targetUser: {
    puuid: "",
    gameName: "",
    tagLine: "",
    encryptedId: "",
    accountId: "",
    profileIconId: 0,
    revisionDate: 0,
    summonerLevel: 0,
    tier: "",
    leaguePoints: 0,
    wins: 0,
    loses: 0,
  },
  setTargetUser: (newUser) =>
    set((state) => ({
      targetUser: { ...state.targetUser, ...newUser },
    })),
}));

export default useUserStore;
