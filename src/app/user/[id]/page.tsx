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
  id: string;
  accountId: string;
  profileIconId: string;
  revisionDate: string;
  summonerLevel: string;
  tier: string;
  leaguePoints: string;
  wins: string;
  loses: string;
}

const fetchRiotAccount = async (
  gameName: string,
  tagLine: string
): Promise<RiotAccount> => {
  const { data } = await axios.get<RiotAccount>("/api/user/search/playerinfo", {
    params: {
      gameName,
      tagLine,
    },
  });
  return data;
};

const fetchRiotAccountDetail = async (puuid: string): Promise<RiotAccount> => {
  const { data } = await axios.get<RiotAccount>(
    "/api/user/search/playerdetail",
    {
      params: {
        puuid,
      },
    }
  );
  return data;
};

function Page() {
  const setTargetUser = useUserStore((state) => state.setTargetUser);
  const {
    puuid,
    gameName,
    tagLine,
    encryptedId,
    accountId,
    profileIconId,
    revisionDate,
    summonerLevel,
    tier,
    leaguePoints,
    wins,
    loses,
  } = useUserStore((state) => state.targetUser);

  const {
    data: account,
    error: accountError,
    isLoading: isAccountLoading,
  } = useQuery<RiotAccount, Error>({
    queryKey: ["riotAccount", gameName, tagLine],
    queryFn: () => fetchRiotAccount(gameName, tagLine),
    enabled: !!gameName && !!tagLine,
  });

  const {
    data: accountDetail,
    error: accountDetailError,
    isLoading: isAccountDetailLoading,
  } = useQuery<RiotAccount, Error>({
    queryKey: ["riotAccountDetail", puuid],
    queryFn: () => fetchRiotAccountDetail(puuid),
    enabled: !!puuid,
  });

  useEffect(() => {
    if (account) {
      console.log("Account data received:", account);
      setTargetUser({
        puuid: account.puuid,
        gameName: account.gameName,
        tagLine: account.tagLine,
        profileIconId: accountDetail?.profileIconId,
        encryptedId: accountDetail?.id,
        summonerLevel: accountDetail?.summonerLevel,
        accountId: accountDetail?.accountId,
        revisionDate: accountDetail?.revisionDate,
      });
    }
  }, [account, setTargetUser, accountDetail]);

  useEffect(() => {
    if (accountError) {
      console.error("Account query error:", accountError);
    }
    if (accountDetailError) {
      console.error("Account detail query error:", accountDetailError);
    }
  }, [accountError, accountDetailError]);

  //암호화 id, account id, puuid, profileIconId, revisionDate, summonerLevel

  useUserStore.subscribe((state, prevState) => {
    console.log("Previous state:", prevState);
    console.log("Current state:", state);
  });

  if (isAccountLoading || isAccountDetailLoading) return <div>Loading...</div>;
  if (accountError || accountDetailError) return <div>An error occurred:</div>;

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
