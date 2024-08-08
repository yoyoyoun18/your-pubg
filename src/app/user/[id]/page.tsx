"use client";

import MatchCard from "@/components/MatchCard";
import StatChartCard from "@/components/StatChartCard";
import StatsCard from "@/components/StatsCard";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";
import useUserStore from "@/store/useUserStore";
import AddMatch from "@/components/AddMatch";

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
  losses: string;
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

const fetchRiotAccountRankInfo = async (
  encryptedId: string
): Promise<RiotAccount> => {
  const { data }: any = await axios.get<RiotAccount>(
    "/api/user/search/playertier",
    {
      params: {
        encryptedId,
      },
    }
  );
  return data[0];
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
    losses,
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

  const {
    data: accountRank,
    error: accountRankError,
    isLoading: isAccountRankLoading,
  } = useQuery<RiotAccount, Error>({
    queryKey: ["riotAccountRank", encryptedId],
    queryFn: () => fetchRiotAccountRankInfo(encryptedId),
    enabled: !!encryptedId,
  });

  useEffect(() => {
    if (account) {
      console.log("Account data received:", {
        account,
        accountDetail,
        accountRank,
      });
      setTargetUser({
        puuid: account.puuid,
        gameName: account.gameName,
        tagLine: account.tagLine,
        profileIconId: accountDetail?.profileIconId,
        encryptedId: accountDetail?.id,
        summonerLevel: accountDetail?.summonerLevel,
        accountId: accountDetail?.accountId,
        revisionDate: accountDetail?.revisionDate,
        leaguePoints: accountRank?.leaguePoints,
        wins: accountRank?.wins,
        losses: accountRank?.losses,
        tier: accountRank?.tier,
      });
    }
  }, [account, setTargetUser, accountDetail, accountRank, gameName]);

  useEffect(() => {
    if (accountError) {
      console.error("Account query error:", accountError);
    }
    if (accountDetailError) {
      console.error("Account detail query error:", accountDetailError);
    }
    if (accountRankError) {
      console.error("Account rank query error:", accountRankError);
    }
  }, [accountError, accountDetailError, accountRankError]);

  useUserStore.subscribe((state, prevState) => {
    console.log("Previous state:", prevState);
    console.log("Current state:", state);
  });

  if (isAccountLoading || isAccountDetailLoading || isAccountRankLoading) {
    return <div>Loading...</div>;
  }
  if (accountError || accountDetailError || accountRankError)
    return <div>An error occurred:</div>;

  return (
    <div className="flex flex-col lg:flex-col justify-center items-center bg-[#EAEAEA] h-auto p-8 w-auto">
      <div className="h-auto bg-white text-black w-[480px] md:w-[680px] lg:w-[1000px] mr-0 lg:mr-4 shadow-md mb-4 lg:mb-0 p-4 overflow-hidden font-SBAggro justify-center">
        <div className="w-full bg-gray-800 p-4 grid grid-cols-12 items-center">
          <div className="col-span-2">
            <img
              src={`https://ddragon.leagueoflegends.com/cdn/14.15.1/img/profileicon/${profileIconId}.png `}
              className="w-full h-full object-cover rounded"
              alt="Profile"
            />
          </div>
          <div className="col-span-8 pl-4">
            <h1 className="text-xl lg:text-2xl font-bold text-white">
              {gameName || account?.gameName || "Loading..."}#{tagLine}
            </h1>
            <div className="flex space-x-2 mt-2">
              <button className="bg-gray-700 text-sm lg:text-base text-white px-4 py-2 rounded">
                전적갱신
              </button>
              <button className="bg-gray-700 text-sm lg:text-base text-white px-4 py-2 rounded">
                즐겨찾기
              </button>
            </div>
            <p className="text-gray-400 text-sm lg:text-base mt-2">
              최근 업데이트: {revisionDate}
            </p>
          </div>
          <div className="col-span-2 flex justify-end items-start text-right h-full text-white text-xs md:text-sm lg:text-base">
            <p>
              Level: <span className="text-yellow-400">{summonerLevel}</span>
            </p>
          </div>
        </div>
        <div className="w-full mt-4">
          <div></div>
        </div>
        <div className="w-full flex flex-col md:flex-row mt-4 justify-center">
          <div className="w-full md:w-1/3 mr-4">
            <StatsCard />
            <StatChartCard />
          </div>

          <div className="w-full md:w-2/3">
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <MatchCard />
            <AddMatch />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
