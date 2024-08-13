import React from "react";
import { useQueries } from "@tanstack/react-query";
import MatchCard from "./MatchCard";
import useUserStore from "@/store/useUserStore";
import AddMatch from "./AddMatch";
import useMatchDetailsStore from "@/store/useMatchDetailsStore";

function MatchDiv() {
  const { puuid, matches } = useUserStore((state) => state.targetUser);
  const { addMatchDetails, matchDetails, clearMatchDetails } =
    useMatchDetailsStore();

  const matchQueries = useQueries({
    queries: matches.map((matchId) => ({
      queryKey: ["matchDetails", matchId],
      queryFn: async () => {
        const response = await fetch(
          `/api/user/search/matchdetail?matchId=${matchId}&targetPuuid=${encodeURIComponent(
            puuid
          )}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch match details");
        }
        return response.json();
      },
      staleTime: Infinity,
      cacheTime: 1000 * 180,
    })),
  });

  React.useEffect(() => {
    clearMatchDetails();
  }, [puuid, matches, clearMatchDetails]);

  React.useEffect(() => {
    matchQueries.forEach((query) => {
      if (query.isSuccess && query.data) {
        const matchId = query.data.metadata.matchId;
        // console.log(query.data);
        addMatchDetails(query.data);
      }
    });
  }, [matchQueries]);

  useMatchDetailsStore.subscribe((state, prevState) => {
    console.log("Previous state:", prevState);
    console.log("Current state:", state);
  });

  return (
    <div className="w-full md:w-2/3">
      {matchQueries.map((query, i) => {
        if (query.isLoading) return <div key={matches[i]}>Loading...</div>;
        if (query.isError)
          return (
            <div key={matches[i]}>Error: {(query.error as Error).message}</div>
          );
        if (query.isSuccess && query.data) {
          const matchId = query.data.metadata.matchId;
          return <MatchCard key={matchId} index={i} />;
        }
        return null;
      })}
      <AddMatch />
    </div>
  );
}

export default MatchDiv;
