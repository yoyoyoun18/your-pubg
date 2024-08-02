import MatchCard from "@/components/MatchCard";
import StatChartCard from "@/components/StatChartCard";
import StatsCard from "@/components/StatsCard";
import React from "react";

function page() {
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
            <h1 className="text-2xl font-bold text-white">BoTamDaeSil</h1>
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

export default page;
