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
        set((state) => {
          const updatedUser = { ...state.targetUser };
          /*변경된 상태만을 업데이트하기위한 hasChanges라는 불리언 값과 비교용 반복문 작성  */
          let hasChanges = false;

          for (const [key, value] of Object.entries(newUser)) {
            if (state.targetUser[key] !== value) {
              updatedUser[key] = value;
              hasChanges = true;
            }
          }

          return hasChanges ? { targetUser: updatedUser } : state;
        }),
    }),
    {
      name: "user-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
);

export default useUserStore;
