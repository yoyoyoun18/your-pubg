"use client";

import React, { useEffect, useState } from "react";

interface Match {
  date: string;
  teams: string[];
  time: string;
}

interface TodayMatchProps {
  num: [number, number]; // num prop 타입 정의
}

const TodayMatch: React.FC<TodayMatchProps> = ({ num }) => {
  const [match, setMatch] = useState<Match | null>(null);

  useEffect(() => {
    async function fetchMatch() {
      try {
        const res = await fetch("/api/schedule");
        const data = await res.json();
        setMatch(data.match);
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    }
    fetchMatch();
  }, []);

  if (!match) {
    return <div className="text-white">경기가 없습니다.</div>;
  }

  return (
    <div className="flex flex-row items-center p-4 h-full w-[487px] justify-center">
      <div className="bg-white shadow-md w-full max-w-4xl h-full flex flex-col justify-center items-center">
        <div className="bg-white rounded-lg mb-4 w-full p-4">
          <div className="flex items-center justify-between mb-2">
            <img
              src="https://i.namu.wiki/i/os9pFyoLvzLJnp7v5GcPE1ab_x22nFVjuh1StjLTmnWKOg9S30gW-whQbjbxlrBbL9WvdyCaKzpb3w1UNEzZUg.svg"
              alt="Team 1 Logo"
              className="w-20 h-20"
            />
            <button className="bg-gray-700 text-white py-1 px-2 rounded-lg text-xs">
              Preview
            </button>
            <img
              src="https://i.namu.wiki/i/os9pFyoLvzLJnp7v5GcPE1ab_x22nFVjuh1StjLTmnWKOg9S30gW-whQbjbxlrBbL9WvdyCaKzpb3w1UNEzZUg.svg"
              alt="Team 2 Logo"
              className="w-20 h-20"
            />
          </div>
          <div className="flex items-center justify-center text-black mb-2 text-2xl">
            <div className="text-sm">
              {match.date} {match.time}
            </div>
          </div>
          <div className="flex items-center justify-between text-black text-xl">
            <div className="font-bold">{match.teams[num[0]]}</div>
            <div className="font-bold">{match.teams[num[1]]}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayMatch;
