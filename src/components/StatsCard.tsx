import React from "react";

const StatsCard = () => {
  return (
    <div className="w-full max-w-md mx-auto bg-gray-100 shadow-md p-4">
      <div className="bg-gray-300 p-2 flex justify-between items-center">
        <div className="text-sm font-semibold">솔로 랭크</div>
        <div className="text-sm font-semibold text-blue-600">W 6</div>
      </div>
      <div className="flex items-center mt-4">
        <div className="ml-4 w-full">
          <div className="text-2xl md:text-4xl font-bold w-full flex justify-between">
            <span>2,343</span>
          </div>
          <div className="text-sm text-gray-600">Gold 2</div>
          <div className="text-sm text-gray-600">57,709위 (상위 23.79%)</div>
        </div>
      </div>
      <div className="mt-4">
        <div className="bg-purple-200 rounded-full h-2">
          <div
            className="bg-purple-600 h-2 rounded-full"
            style={{ width: "70%" }}
          ></div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
        <div>
          <div className="font-semibold">K/D</div>
          <div className="text-lg">0.38</div>
        </div>
        <div>
          <div className="font-semibold">경기 당 데미지</div>
          <div className="text-lg">88</div>
        </div>
        <div>
          <div className="font-semibold">승률</div>
          <div>6.4%</div>
        </div>
        <div>
          <div className="font-semibold">Top 10%</div>
          <div>64.9%</div>
        </div>
        <div>
          <div className="font-semibold">최대 거리 킬</div>
          <div>0.0m</div>
        </div>
        <div>
          <div className="font-semibold">헤드샷</div>
          <div>0.0%</div>
        </div>
        <div>
          <div className="font-semibold">평균등수</div>
          <div>#8.3</div>
        </div>
        <div>
          <div className="font-semibold">KDA</div>
          <div>0.60</div>
        </div>
        <div>
          <div className="font-semibold">최다 킬</div>
          <div>0</div>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
