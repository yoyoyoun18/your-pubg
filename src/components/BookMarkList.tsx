import React from "react";

function BookMarkList() {
  return (
    <div className="flex flex-row items-center p-4 h-full">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold">팀 순위</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 p-2 text-start text-xs text-white bg-[#5383E8]">
          <div className="col-span-5 flex items-center font-bold">팀명</div>
          <div className="col-span-3 flex items-center font-bold">전적</div>
          <div className="col-span-4 flex items-center font-bold">승점</div>
        </div>
        <div className="p-4 text-center text-gray-500 h-full">
          <p className="mb-4">프로필 화면에서 즐겨찾기 버튼을 누르고</p>
          <p>홈 화면에서 즐겨찾기한 플레이어의 정보를 확인해보세요.</p>
        </div>
      </div>
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl h-full ml-4">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold">선수 순위</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center"></div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 p-2 text-start text-xs text-white bg-[#5383E8]">
          <div className="col-span-5 flex items-center font-bold">선수명</div>
          <div className="col-span-3 flex items-center font-bold">팀명</div>
          <div className="col-span-4 flex items-center font-bold">POG</div>
        </div>
        <div className="p-4 text-center text-gray-500 h-full">
          <p className="mb-4">프로필 화면에서 즐겨찾기 버튼을 누르고</p>
          <p>홈 화면에서 즐겨찾기한 플레이어의 정보를 확인해보세요.</p>
        </div>
      </div>
    </div>
  );
}

export default BookMarkList;
