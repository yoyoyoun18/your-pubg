import React from "react";
import StatChart from "./StatChart";

const StatChartCard = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-gray-100 shadow-md p-4">
      <div className="bg-gray-300 p-2 flex justify-between items-center">
        <div className="text-sm font-semibold">전적</div>
        <div className="text-sm font-semibold text-blue-600">W 6</div>
      </div>
      <div className="flex items-center h-full">
        <StatChart />
      </div>
    </div>
  );
};

export default StatChartCard;
