import React, { useEffect } from "react";
import axios from "axios";
import MatchCard from "./MatchCard";
import useUserStore from "@/store/useUserStore";
import AddMatch from "./AddMatch";
import useMatchDetailsStore from "@/store/useMatchDetailsStore";

function MatchDiv() {
  const { matches } = useUserStore((state) => state.targetUser);
  const { matchDetails, addMatchDetails } = useMatchDetailsStore();
  const matchIdExample = ["KR_7197355538", "KR_7197299691"];

  useEffect(() => {
    const fetchMatchDetails = async () => {
      const apiKey = "RGAPI-f1801737-bb25-4af7-ac22-855467bc91c3";

      for (const matchId of matches) {
        try {
          const response = await axios.get(
            `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`
          );
          // console.log(`Match details for ${matchId}:`, response.data);
          addMatchDetails(response.data);
        } catch (error) {
          console.error(`Error fetching match details for ${matchId}:`, error);
        }
      }
    };

    fetchMatchDetails();
  }, []);

  useMatchDetailsStore.subscribe((state, prevState) => {
    console.log("Previous state:", prevState);
    console.log("Current state:", state);
  });

  return (
    <div className="w-full md:w-2/3">
      {matches.map((a, i) => {
        return <MatchCard key={i} />;
      })}
      <AddMatch />
    </div>
  );
}

export default MatchDiv;
