import React from "react";
import StatChart from "./StatChart";
import useUserStore from "@/store/useUserStore";

const StatChartCard = () => {
  const { wins, losses } = useUserStore((state) => state.targetUser);
  return (
    <div className="w-full bg-white shadow-md mt-4">
      <div className="bg-[#5383E8] p-2 flex justify-between items-center text-white">
        <div className="text-sm font-semibold">전적</div>
        <div className="text-sm font-semibold ">
          <span className=" mr-2">W {wins}</span>
          <span className="">L {losses}</span>
        </div>
      </div>
      <div className="flex items-center h-full">
        <StatChart />
      </div>
    </div>
  );
};

export default StatChartCard;
