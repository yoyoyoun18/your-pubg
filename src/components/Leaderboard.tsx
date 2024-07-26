"use client";
import { useTopPlayers } from "@/app/hooks/useTopPlayers";
import React, { useEffect } from "react";

const Leaderboard = () => {
  const {
    data: topPlayersSteam,
    isLoading: isLoadingSteam,
    error: errorSteam,
  } = useTopPlayers("steam", "asia");

  const {
    data: topPlayersKakao,
    isLoading: isLoadingKakao,
    error: errorKakao,
  } = useTopPlayers("kakao", "asia");

  if (isLoadingSteam || isLoadingKakao) return <p>Loading...</p>;
  if (errorSteam) return <p>Error: {errorSteam.message}</p>;
  if (errorKakao) return <p>Error: {errorKakao.message}</p>;

  return (
    <div className="bg-gray-100 flex items-center justify-center text-xs">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
        <div className="bg-gray-200 p-2">
          <div className="grid grid-cols-12 gap-4">
            <div className="font-bold col-span-2">순위</div>
            <div className="font-bold col-span-5">닉네임</div>
            <div className="font-bold col-span-2">RP</div>
            <div className="font-bold col-span-3">경기수</div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {topPlayersSteam?.map((player, index) => (
            <li
              key={index}
              className="grid grid-cols-12 gap-4 p-3 items-center"
            >
              <div className="col-span-2 text-center">{index + 1}</div>
              <div className="col-span-5">
                <a
                  href={`https://pubg.op.gg/user/${player.name}`}
                  className="text-blue-500 hover:underline"
                >
                  {player.name}
                </a>
              </div>
              <div className="col-span-2 text-center">{player.rankPoint}</div>
              <div className="col-span-3 text-center">{player.matchCount}</div>
            </li>
          ))}
        </ul>
        <h2 className="text-center mt-6">Kakao - Asia</h2>
        <ul className="divide-y divide-gray-200">
          {topPlayersKakao?.map((player, index) => (
            <li
              key={index}
              className="grid grid-cols-12 gap-4 p-3 items-center"
            >
              <div className="col-span-2 text-center">{index + 1}</div>
              <div className="col-span-5">
                <a
                  href={`https://pubg.op.gg/user/${player.name}`}
                  className="text-blue-500 hover:underline"
                >
                  {player.name}
                </a>
              </div>
              <div className="col-span-2 text-center">{player.rankPoint}</div>
              <div className="col-span-3 text-center">{player.matchCount}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
