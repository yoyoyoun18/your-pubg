"use client";

import React, { useEffect, useState } from "react";

interface Match {
  date: string;
  teams: string[];
  time: string;
}

interface TodayMatchProps {
  num: [number, number, string]; // num prop 타입 정의
}

interface TeamLogo {
  url: string;
}

interface TeamLogos {
  [teamName: string]: TeamLogo;
}

const truncateString = (str: string, num: number = 7) => {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num);
};

const TodayMatch: React.FC<TodayMatchProps> = ({ num }) => {
  const [match, setMatch] = useState<Match | null>(null);
  const [teamLogos, setTeamLogos] = useState<TeamLogos | null>(null);

  useEffect(() => {
    async function fetchMatch() {
      try {
        const res = await fetch("/api/schedule");
        if (!res.ok) {
          throw new Error("Failed to fetch schedule");
        }
        const resp = await fetch("/api/team-logos");
        if (!resp.ok) {
          throw new Error("Failed to fetch team logos");
        }
        const data = await res.json();
        const logoData = await resp.json();
        setMatch(data.match);
        setTeamLogos(logoData);
      } catch (error) {
        console.error("Error fetching match data:", error);
      }
    }
    fetchMatch();
  }, []);

  if (!match || !teamLogos) {
    return <div className="text-white">Loading...</div>;
  }

  const team1 = match.teams[num[0]];
  const team2 = match.teams[num[1]];
  const team1Logo = teamLogos[team1]?.url;
  const team2Logo = teamLogos[team2]?.url;

  return (
    <div className="flex flex-row items-center p-4 h-full w-[487px] justify-center">
      <div className="bg-white shadow-md w-full max-w-4xl h-auto flex flex-col justify-center items-center">
        <div className="bg-white h-full w-full p-4">
          <div className="flex items-center justify-between mb-2">
            {team1Logo ? (
              <div className="flex flex-col justify-center items-center w-[75px] h-[96] lg:w-[100px]">
                <img
                  src={team1Logo}
                  alt={`${team1} Logo`}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                {/* <div className="text-center mt-4 text-xs lg:text-base">
                  {truncateString(team1)}
                </div> */}
              </div>
            ) : (
              <div className="w-20 h-20 bg-gray-200" />
            )}
            <button className="bg-gray-700 text-white py-1 px-2 rounded-lg text-xs">
              Preview
            </button>
            {team2Logo ? (
              <div className="flex flex-col justify-center items-center w-[75px] h-[96] lg:w-[100px]">
                <img
                  src={team2Logo}
                  alt={`${team2} Logo`}
                  className="w-16 h-16 md:w-20 md:h-20"
                />
                {/* <div className=" text-center mt-4 text-xs lg:text-base">
                  {truncateString(team2)}
                </div> */}
              </div>
            ) : (
              <div className="w-20 h-20 bg-gray-200" />
            )}
          </div>
          <div className="flex items-center justify-center text-black mb-2 text-2xl">
            <div className="text-sm">
              {match.date} {num[2]}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodayMatch;
