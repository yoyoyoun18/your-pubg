import React from "react";
import Leaderboard from "./Leaderboard";

function BookMarkList() {
  return (
    <div className="flex flex-row items-center p-4 h-full">
      <div className="bg-white shadow-md w-full max-w-4xl h-full mr-1">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">팀 순위</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center"></div>
          </div>
        </div>
        <div className="text-center text-gray-500 h-full mt-2">
          <Leaderboard />
        </div>
      </div>
      <div className="bg-white shadow-md w-full max-w-4xl h-full ml-1">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">선수 순위</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center"></div>
          </div>
        </div>
        <div className="text-center text-gray-500 h-full mt-2">
          <Leaderboard />
        </div>
      </div>
    </div>
  );
}

export default BookMarkList;
