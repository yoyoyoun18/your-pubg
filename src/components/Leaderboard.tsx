"use client";

import useUserStore from "@/store/useUserStore";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Link from "next/link";
import React, { useState } from "react";

interface LeaderboardEntry {
  summonerName: string;
  tagLine: string;
  leaguePoints: number;
}

interface LeaderboardData {
  entries: LeaderboardEntry[];
}

const fetchLeaderboard = async (): Promise<LeaderboardData> => {
  const response = await axios.get(
    "http://localhost:3000/api/riot/leaderboard"
  );
  return response.data;
};

const Leaderboard = () => {
  const [targetWord, setTargetWord] = useState<string>("");
  const setTargetUser = useUserStore((state) => state.setTargetUser);

  const handleClick = (summonerName: string, tagLine: string) => {
    const fullIdentifier = `${summonerName}#${tagLine}`;
    setTargetWord(fullIdentifier);

    setTargetUser({
      gameName: summonerName,
      tagLine: tagLine,
    });
  };

  const { data, isLoading, error } = useQuery<LeaderboardData, Error>({
    queryKey: ["leaderboard"],
    queryFn: fetchLeaderboard,
    staleTime: 60000,
    gcTime: 3600000,
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="bg-gray-100 flex items-center justify-center text-xs">
      <div className="bg-white shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="bg-[#5383E8] p-2">
          <div className="grid grid-cols-12 gap-4 text-white">
            <div className="font-bold col-span-2">순위</div>
            <div className="font-bold col-span-8">닉네임</div>
            <div className="font-bold col-span-2">LP</div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {data?.entries.map((player, index) => (
            <li
              key={index}
              className="grid grid-cols-12 gap-4 p-3 items-center"
            >
              <div className="col-span-2 text-center">{index + 1}</div>
              <div className="col-span-8">
                <Link href={`/user/${player.summonerName}${player.tagLine}`}>
                  <span
                    className="text-blue-500 cursor-pointer"
                    onClick={() =>
                      setTargetUser({
                        gameName: player.summonerName,
                        tagLine: player.tagLine,
                      })
                    }
                  >
                    {player.summonerName}#{player.tagLine}
                  </span>
                </Link>
              </div>
              <div className="col-span-2 text-center">
                {player.leaguePoints}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
