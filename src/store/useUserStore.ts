import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

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
  matches: string[];
  [key: string]: any;
}

interface UserStoreState {
  targetUser: TargetUser;
  setTargetUser: (newUser: Partial<TargetUser>) => void;
}

const useUserStore = create<UserStoreState>()(
  persist(
    (set) => ({
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
        matches: [],
      },
      setTargetUser: (newUser) =>
        set((state) => ({
          targetUser: { ...state.targetUser, ...newUser },
        })),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
