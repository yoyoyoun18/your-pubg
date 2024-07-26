import React from "react";

const MatchCard = () => {
  return (
    <div className="w-full bg-green-100 p-4 grid grid-cols-12 items-center mb-4">
      <div className="col-span-2">
        <span className="bg-purple-700 text-white text-xs font-bold p-1 rounded w-auto mr-2">
          스쿼드
        </span>
        <span className="bg-purple-700 text-white text-xs font-bold p-1 rounded w-auto mt-2">
          FPP
        </span>
        <div className="text-sm mt-1">5일 전</div>
        <div className="text-xs text-gray-600">16:18</div>
      </div>
      <div className="col-span-2 text-xl font-bold text-gray-800">
        <div>
          #10<span className="text-sm font-normal">/33</span>
        </div>
      </div>
      <div className="col-span-1 text-center">
        <div className="text-md md:text-xl font-bold">1</div>
        <div className="text-xs text-gray-600">킬</div>
      </div>
      <div className="col-span-1 text-center">
        <div className="text-md md:text-xl font-bold">96</div>
        <div className="text-xs text-gray-600">데미지</div>
      </div>
      <div className="col-span-2 text-center">
        <div className="text-md md:text-xl font-bold">8.73km</div>
        <div className="text-xs text-gray-600">이동 거리</div>
      </div>
      <div className="col-span-3 flex justify-center items-center">
        <button className="bg-white border border-gray-400 rounded px-4 py-2 text-sm">
          팀원보기
        </button>
      </div>
      <div className="col-span-1 text-right">
        <button className="text-gray-600 text-xl">&#9660;</button>
      </div>
    </div>
  );
};

export default MatchCard;
