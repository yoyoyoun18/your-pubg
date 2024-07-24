import React from "react";

function RecentPatchContainer() {
  return (
    <div className="h-auto bg-white text-black w-120 mr-0 lg:mr-4 shadow-md mb-4 p-4 hover:translate-y-[-6px] cursor-pointer transition-transform duration-200">
      <div className="w-full h-60 bg-latest-patch-thumbnail-1 bg-center bg-cover bg-no-repeat "></div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-bold mb-2">패치 노트 - 업데이트 30.2</h2>
        <p className="text-gray-700 mb-4">
          업데이트 30.2에서 신규 기능 및 개선 사항을 만나보세요.
        </p>
        <div className="flex items-center text-orange-500">
          <span className="font-semibold">패치노트</span>
          <span className="ml-auto text-gray-500">2024.07.09</span>
        </div>
      </div>
    </div>
  );
}

export default RecentPatchContainer;
