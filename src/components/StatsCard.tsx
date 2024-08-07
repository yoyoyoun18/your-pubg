import useUserStore from "@/store/useUserStore";
import React from "react";

const StatsCard = () => {
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
  return (
    <div className="bg-white shadow-lg overflow-hidden w-full max-w-4xl h-[150px]">
      <div className="bg-[#5383E8] p-2">
        <div className="font-bold col-span-2 text-white text-sm">솔로 랭크</div>
      </div>
      <div className="grid grid-cols-12 h-auto">
        <div className="col-span-6 lg:col-span-4 p-2 flex justify-center items-center">
          <span className="rounded-full bg-gray-400 h-[90px] w-[90px]"></span>
        </div>
        <div className="col-span-6 lg:col-span-4 p-2 flex justify-center items-center flex-col">
          <span className="font-bold text-xs lg:text-md mb-1">{tier}</span>
          <span className="text-xs">{leaguePoints} LP</span>
        </div>
        <div className="lg:col-span-4 p-2 justify-center items-center flex-col flex md:hidden lg:flex">
          <span className="text-xs mb-1">
            {wins}승 {losses}패
          </span>
          <span className="text-xs">
            승률: {((Number(wins) / (Number(losses) + Number(wins))) * 100) | 0}
            {/*승률 계산*/}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
