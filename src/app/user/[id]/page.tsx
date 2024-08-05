"use client";

import MatchCard from "@/components/MatchCard";
import StatChartCard from "@/components/StatChartCard";
import StatsCard from "@/components/StatsCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import useUserStore from "@/store/useUserStore";

interface RiotAccount {
  puuid: string;
  gameName: string;
  tagLine: string;
}

const fetchRiotAccount = async (): Promise<RiotAccount> => {
  const { data } = await axios.get<RiotAccount>("/api/user/search", {
    params: {
      gameName: "Blue",
      tagLine: "KR33",
    },
  });
  return data;
};

function Page() {
  const setTargetUser = useUserStore((state) => state.setTargetUser);
  const gameName = useUserStore((state) => state.targetUser.gameName);
  const tagLine = useUserStore((state) => state.targetUser.tagLine);
  const puuid = useUserStore((state) => state.targetUser.puuid);

  const {
    data: account,
    error,
    isLoading,
  } = useQuery<RiotAccount, Error>({
    queryKey: ["riotAccount"],
    queryFn: fetchRiotAccount,
  });

  useEffect(() => {
    if (account) {
      console.log("Account data received:", account);
      setTargetUser({
        puuid: account.puuid,
        gameName: account.gameName,
        tagLine: account.tagLine,
      });
    }
  }, [account, setTargetUser]);

  useEffect(() => {
    if (error) {
      console.error("Query error:", error);
    }
  }, [error]);

  useUserStore.subscribe((state, prevState) => {
    console.log("Previous state:", prevState);
    console.log("Current state:", state);
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>An error occurred: {error.message}</div>;

  return (
    <div className="flex flex-col lg:flex-col justify-center items-center bg-[#EAEAEA] h-auto p-8 w-auto">
      <div className="h-auto bg-white text-black w-[480px] md:w-[680px] lg:w-[1000px] mr-0 lg:mr-4 shadow-md mb-4 lg:mb-0 p-4 overflow-hidden font-SBAggro justify-center">
        <div className="w-full bg-gray-800 p-4 grid grid-cols-12 items-center">
          <div className="col-span-2">
            <img
              src="https://avatars.steamstatic.com/ee408126efcefb02b7aea459bfcba4650237df39_full.jpg"
              className="w-full h-full object-cover rounded"
              alt="Profile"
            />
          </div>
          <div className="col-span-8 pl-4">
            <h1 className="text-2xl font-bold text-white">
              {gameName || account?.gameName || "Loading..."}#{tagLine}
            </h1>
            <div className="flex space-x-2 mt-2">
              <button className="bg-gray-700 text-white px-4 py-2 rounded">
                전적갱신
              </button>
              <button className="bg-gray-700 text-white px-4 py-2 rounded">
                즐겨찾기
              </button>
            </div>
            <p className="text-gray-400 mt-2">최근 업데이트: 12일 전</p>
          </div>
          <div className="col-span-2 flex justify-end items-start text-right h-full text-white">
            <p>
              Level: <span className="text-yellow-400">701</span>
            </p>
          </div>
        </div>
        <div className="w-full mt-4">
          <div></div>
        </div>
        <div className="w-full flex flex-row mt-4">
          <StatsCard />
          <StatChartCard />
        </div>
        <div className="w-full mt-4">
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
          <MatchCard />
        </div>
      </div>
    </div>
  );
}

export default Page;
