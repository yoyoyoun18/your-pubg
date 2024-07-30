"use client";
import axios from "axios";
import React, { useEffect } from "react";

const Leaderboard = () => {
  const leaderboardData = [
    {
      rank: 1,
      nickname: "91_PD",
      rating: 4812,
      win: 167,
      link: "https://pubg.op.gg/user/91_PD",
    },
    {
      rank: 2,
      nickname: "Xiao_Sxxng",
      rating: 4725,
      win: 178,
      link: "https://pubg.op.gg/user/Xiao_Sxxng",
    },
    {
      rank: 3,
      nickname: "Mr-Huang-0516",
      rating: 4673,
      win: 182,
      link: "https://pubg.op.gg/user/Mr-Huang-0516",
    },
    {
      rank: 4,
      nickname: "DaguiTouA",
      rating: 4543,
      win: 104,
      link: "https://pubg.op.gg/user/DaguiTouA",
    },
    {
      rank: 5,
      nickname: "97xl_-",
      rating: 4528,
      win: 287,
      link: "https://pubg.op.gg/user/97xl_-",
    },
    {
      rank: 6,
      nickname: "MarTha_KongBai",
      rating: 4503,
      win: 176,
      link: "https://pubg.op.gg/user/MarTha_KongBai",
    },
    {
      rank: 7,
      nickname: "ized_-",
      rating: 4495,
      win: 135,
      link: "https://pubg.op.gg/user/ized_-",
    },
    {
      rank: 8,
      nickname: "GuoZzz14",
      rating: 4430,
      win: 1779,
      link: "https://pubg.op.gg/user/GuoZzz14",
    },
    {
      rank: 9,
      nickname: "ZIZON-WonE-",
      rating: 4423,
      win: 189,
      link: "https://pubg.op.gg/user/ZIZON-WonE-",
    },
    {
      rank: 10,
      nickname: "kkove1",
      rating: 4409,
      win: 317,
      link: "https://pubg.op.gg/user/kkove1",
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/riot/leaderboard")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  return (
    <div className="bg-gray-100 flex items-center justify-center text-xs">
      <div className="bg-white shadow-lg overflow-hidden w-full max-w-4xl">
        <div className="bg-[#5383E8] p-2">
          <div className="grid grid-cols-12 gap-4 text-white">
            <div className="font-bold col-span-2">순위</div>
            <div className="font-bold col-span-5">닉네임</div>
            <div className="font-bold col-span-2">RP</div>
            <div className="font-bold col-span-3">경기수</div>
          </div>
        </div>
        <ul className="divide-y divide-gray-200">
          {leaderboardData.map((player, index) => (
            <li
              key={index}
              className="grid grid-cols-12 gap-4 p-3 items-center"
            >
              <div className="col-span-2 text-center">{player.rank}</div>
              <div className="col-span-5">
                <a href={player.link} className="text-blue-500 hover:underline">
                  {player.nickname}
                </a>
              </div>
              <div className="col-span-2 text-center">{player.rating}</div>
              <div className="col-span-3 text-center">{player.win}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Leaderboard;
