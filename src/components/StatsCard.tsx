import React from "react";

const StatsCard = () => {
  return (
    <div className="bg-white shadow-lg overflow-hidden w-full max-w-4xl h-[150px]">
      <div className="bg-[#5383E8] p-2">
        <div className="font-bold col-span-2 text-white">솔로 랭크</div>
      </div>
      <div className="grid grid-cols-12 h-auto">
        <div className="col-span-6 lg:col-span-4 p-2 flex justify-center items-center">
          <span className="rounded-full bg-gray-400 h-[90px] w-[90px]"></span>
        </div>
        <div className="col-span-6 lg:col-span-4 p-2 flex justify-center items-center flex-col">
          <span className="font-bold text-sm lg:text-base mb-1">
            Challenger
          </span>
          <span className="text-xs">2400 LP</span>
        </div>
        <div className="lg:col-span-4 p-2 justify-center items-center flex-col flex md:hidden lg:flex">
          <span className="text-xs mb-1">254승 177패</span>
          <span className="text-xs">승률 59%</span>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
