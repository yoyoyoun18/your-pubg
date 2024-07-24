import React from "react";

function PatchList() {
  const leaderboardData = Array.from({ length: 10 }, (_, index) => ({
    rank: `패치 노트 - 업데이트 30.${index + 1}`,
    nickname: `업데이트 30.${
      index + 1
    }에서 신규 기능 및 개선 사항을 만나보세요.`,
    rating: `2024.07.${index + 1}`,
    win: `기능 및 개선 사항 ${index + 1}`,
  }));

  return (
    <ul className="divide-y divide-gray-200">
      {leaderboardData.map((item, index) => (
        <li
          key={index}
          className="grid grid-cols-12 gap-4 p-3 items-center hover:bg-gray-100"
        >
          <div className="col-span-6 text-start cursor-pointer font-bold">
            {item.rank}
          </div>
          <div className="col-span-3 text-start cursor-pointer">
            {item.rating}
          </div>
          <div className="col-span-3 text-start cursor-pointer flex">
            <div className="border border-[#EBB014] w-12 mr-2 flex justify-center items-center">
              PC
            </div>
            <div className="w-12 flex justify-center items-center">콘솔</div>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default PatchList;
