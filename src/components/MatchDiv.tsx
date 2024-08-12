import React, { useEffect } from "react";
import axios from "axios";
import MatchCard from "./MatchCard";
import useUserStore from "@/store/useUserStore";
import AddMatch from "./AddMatch";
import useMatchDetailsStore from "@/store/useMatchDetailsStore";

interface Participant {
  puuid: string;
  participantId: number;
  summonerName: string;
  championId: number;
  teamId: number;
}

function MatchDiv() {
  const { puuid, matches } = useUserStore((state) => state.targetUser);
  const { matchDetails, addMatchDetails } = useMatchDetailsStore();
  const targetPuuid = puuid;

  useEffect(() => {
    const fetchMatchDetails = async () => {
      for (const matchId of matches) {
        try {
          const response = await axios.get(
            `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=RGAPI-7e3b0b0e-ba13-43b7-b70e-bf7e9795adf0`
          );

          const matchData = response.data;
          const targetParticipant = matchData.info.participants.find(
            (participant: Participant) => participant.puuid === targetPuuid
          );

          if (targetParticipant) {
            // targetPuuid와 일치하는 참가자가 있는 경우에만 저장
            addMatchDetails({
              ...matchData,
              info: {
                ...matchData.info,
                participants: [targetParticipant], // 타겟 참가자만 저장
              },
            });
          }
        } catch (error) {
          console.error(`Error fetching match details for ${matchId}:`, error);
        }
      }
    };

    fetchMatchDetails();
  }, [matches, addMatchDetails]);

  useMatchDetailsStore.subscribe((state, prevState) => {
    console.log("Previous state:", prevState);
    console.log("Current state:", state);
  });

  return (
    <div className="w-full md:w-2/3">
      {matches.map((a, i) => {
        return <MatchCard key={i} index={i} />;
      })}
      <AddMatch />
    </div>
  );
}

export default MatchDiv;
