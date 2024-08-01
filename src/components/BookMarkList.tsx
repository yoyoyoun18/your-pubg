import React from "react";
import Leaderboard from "./Leaderboard";
import TeamRank from "./TeamRank";
import PlayerRank from "./PlayerRank";

function BookMarkList() {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 h-full">
      <div className="bg-white shadow-md w-full max-w-4xl h-full mr-1">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">팀 순위</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center"></div>
          </div>
        </div>
        <div className="text-center text-gray-500 h-full mt-2">
          <TeamRank />
        </div>
      </div>
      <div className="bg-white shadow-md w-full max-w-4xl h-full ml-1 mt-4 md:mt-0">
        <div className="flex items-center justify-between">
          <h2 className="font-bold">선수 순위</h2>
          <div className="flex items-center space-x-2">
            <div className="flex items-center"></div>
          </div>
        </div>
        <div className="text-center text-gray-500 h-full mt-2">
          <PlayerRank />
        </div>
      </div>
    </div>
  );
}

export default BookMarkList;
