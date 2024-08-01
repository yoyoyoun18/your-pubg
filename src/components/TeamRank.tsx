"use client";

import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";

interface TeamRanking {
  rank: string;
  name: string;
}

interface TeamLogo {
  url: string;
}

interface LeaderboardData {
  match: {
    rankings: TeamRanking[];
  };
}

interface TeamLogoData {
  [teamName: string]: {
    url: string;
  };
}

const fetchLeaderboard = async (): Promise<LeaderboardData> => {
  const response = await axios.get("http://localhost:3000/api/ranking/team");
  return response.data;
};

const fetchTeamLogo = async (): Promise<TeamLogoData> => {
  const response = await axios.get("http://localhost:3000/api/team-logos");
  return response.data;
};

const TeamRank = () => {
  const {
    data: leaderboardData,
    isLoading: leaderboardIsLoading,
    error: leaderboardError,
  } = useQuery<LeaderboardData, Error>({
    queryKey: ["teamrank"],
    queryFn: fetchLeaderboard,
    staleTime: 60000,
    gcTime: 3600000,
  });

  const {
    data: logoData,
    isLoading: logoIsLoading,
    error: logoError,
  } = useQuery<TeamLogoData, Error>({
    queryKey: ["teamlogo"],
    queryFn: fetchTeamLogo,
    staleTime: 60000,
    gcTime: 3600000,
  });

  if (leaderboardIsLoading || logoIsLoading) return <div>Loading...</div>;
  if (leaderboardError) return <div>Error: {leaderboardError.message}</div>;
  if (logoError) return <div>Error: {logoError.message}</div>;

  return (
    <div className="bg-white flex items-center justify-center text-xs">
      <ul className="divide-y divide-gray-200 w-full h-full">
        {leaderboardData?.match.rankings.map((team, index) => (
          <li key={index} className="grid grid-cols-12 gap-4 p-3 items-center">
            <div className="col-span-2 flex items-center text-start">
              {index + 1}
            </div>
            <div className="col-span-2 flex items-center">
              {logoData && logoData[team.name] && (
                <img
                  src={logoData[team.name].url}
                  alt={`${team.name} logo`}
                  className="w-6 h-6 object-contain"
                />
              )}
            </div>
            <div className="col-span-8 flex items-center text-start">
              <span className="text-blue-500 cursor-pointer">{team.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamRank;
