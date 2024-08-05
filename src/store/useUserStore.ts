import { create } from "zustand";

interface TargetUser {
  puuid: string;
  gameName: string;
  tagLine: string;
  encryptedId: string;
  accountId: string;
  profileIconId: string;
  revisionDate: string;
  summonerLevel: string;
  tier: string;
  leaguePoints: string;
  wins: string;
  losses: string;
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
    profileIconId: "",
    revisionDate: "",
    summonerLevel: "",
    tier: "",
    leaguePoints: "",
    wins: "",
    losses: "",
  },
  setTargetUser: (newUser) =>
    set((state) => ({
      targetUser: { ...state.targetUser, ...newUser },
    })),
}));

export default useUserStore;
