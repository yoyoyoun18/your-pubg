"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

interface TeamRanking {
  rank: string;
  name: string;
}

interface LeaderboardData {
  match: {
    rankings: TeamRanking[];
  };
}

const fetchLeaderboard = async (): Promise<LeaderboardData> => {
  const response = await axios.get("http://localhost:3000/api/ranking/team");
  return response.data;
};

const TeamRank = () => {
  const { data, isLoading, error } = useQuery<LeaderboardData, Error>({
    queryKey: ["teamrank"],
    queryFn: fetchLeaderboard,
    staleTime: 60000,
    gcTime: 3600000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  console.log(data?.match.rankings[0]);

  return (
    <div className="bg-white flex items-center justify-center text-xs">
      <ul className="divide-y divide-gray-200 w-full h-full">
        {data?.match.rankings.map((team, index) => (
          <li key={index} className="grid grid-cols-12 gap-4 p-3 items-center ">
            <div className="col-span-2 flex items-center text-start">
              {index + 1}
            </div>
            <div className="col-span-8 flex items-center text-start">
              <span className="text-blue-500 cursor-pointer">{team.name}</span>
            </div>
            {/* <div className="col-span-2 text-center">{team.point}</div> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamRank;
