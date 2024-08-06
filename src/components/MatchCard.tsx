import React from "react";

const MatchCard = () => {
  return (
    <div className="flex items-center justify-between bg-blue-100 rounded-lg overflow-hidden h-[100px] mb-4 shadow-md">
      <div className="bg-[#5383E8] h-full w-[5px] mr-2"></div>
      <div className="flex flex-row w-1/2 items-center">
        <div className="flex flex-col text-xs lg:text-xs mr-6">
          <span className="text-[#5383E8] font-bold text-md lg:text-lg mb-4">
            승리
          </span>
          <span className="lg:block hidden">2023-06-02 22:26:37</span>
          <span className="lg:mt-0 mt-1">20분 6초</span>
        </div>
        <div className="rounded-full h-[70px] w-[70px] lg:h-[90px] lg:w-[90px] bg-gray-300 mr-8"></div>
      </div>
      <div className="w-1/2 flex flex-row">
        <div className="flex flex-col w-1/2 border-l border-gray-300 p-2 text-xs lg:text-sm">
          <div className="w-full">
            <span>15 </span>/<span className="text-pink-500"> 4 </span>/
            <span> 3</span>
          </div>
          <span className="text-xs text-gray-500 opacity-75">4.50:1 평점</span>
        </div>
        <span className="bg-red-600 h-[25px] p-2 w-auto text-white rounded-2xl flex justify-center items-center text-xs">
          트리플 킬
        </span>
      </div>
    </div>
  );
};

export default MatchCard;
