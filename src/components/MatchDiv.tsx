import React, { useEffect } from "react";
import axios from "axios";
import MatchCard from "./MatchCard";
import useUserStore from "@/store/useUserStore";
import AddMatch from "./AddMatch";

function MatchDiv() {
  const { matches } = useUserStore((state) => state.targetUser);

  useEffect(() => {
    const fetchMatchDetails = async () => {
      try {
        const response = await axios.get(
          `https://asia.api.riotgames.com/lol/match/v5/matches/KR_7197355538?api_key=RGAPI-3ba21017-7d75-4233-acf5-469d38eb41fd`
        );
        console.log("Match details:", response.data);
      } catch (error) {
        console.error("Error fetching match details:", error);
      }
    };

    fetchMatchDetails();
  }, []);

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
