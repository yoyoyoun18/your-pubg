import React from "react";

function BookMarkList() {
  return (
    <div className="flex flex-col items-center p-4 h-full">
      <div className="bg-white shadow-md rounded-lg w-full max-w-4xl h-full">
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-bold">즐겨찾기</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <input type="checkbox" className="form-checkbox cursor-pointer" />
              <span className="ml-2">FPP</span>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-4 p-2 text-start text-xs text-gray-800 bg-gray-200">
          <div className="col-span-5 flex items-center font-bold">닉네임</div>
          <div className="col-span-3 flex items-center font-bold">경쟁전</div>
          <div className="col-span-4 flex items-center font-bold">
            경쟁전 솔로
          </div>
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
