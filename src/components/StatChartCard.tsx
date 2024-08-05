import React from "react";
import StatChart from "./StatChart";
import useUserStore from "@/store/useUserStore";

const StatChartCard = () => {
  const { wins, losses } = useUserStore((state) => state.targetUser);
  return (
    <div className="w-full max-w-md mx-auto bg-gray-100 shadow-md p-4">
      <div className="bg-gray-300 p-2 flex justify-between items-center">
        <div className="text-sm font-semibold">전적</div>
        <div className="text-sm font-semibold ">
          <span className="text-blue-500 mr-2">W {wins}</span>
          <span className="text-red-500">L {losses}</span>
        </div>
      </div>
      <div className="flex items-center h-full">
        <StatChart />
      </div>
    </div>
  );
};

export default StatChartCard;
