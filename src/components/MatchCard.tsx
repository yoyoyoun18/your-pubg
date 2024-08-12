import useMatchDetailsStore from "@/store/useMatchDetailsStore";
import useUserStore from "@/store/useUserStore";
import React from "react";

const MatchCard = ({ index }: any) => {
  const { matches } = useUserStore((state) => state.targetUser);
  const { matchDetails } = useMatchDetailsStore();
  const gameResult = matchDetails[index]?.info.participants[0].win;
  const champion = matchDetails[index]?.info.participants[0].championName;
  const durationMin = (matchDetails[index]?.info.gameDuration / 60) | 0;
  const durationSec = matchDetails[index]?.info.gameDuration % 60;
  const kills = matchDetails[index]?.info.participants[0].kills;
  const deaths = matchDetails[index]?.info.participants[0].deaths;
  const assists = matchDetails[index]?.info.participants[0].assists;
  const kda = (kills + assists) / deaths;
  const kdaTruncated = parseFloat(kda.toFixed(2)); // 소수점 둘째자리에서 끊어주는 메서드
  const largestMultiKill =
    matchDetails[index]?.info.participants[0].largestMultiKill;
  const multikills: { [key: number]: string } = {
    0: "",
    1: "",
    2: "더블 킬",
    3: "트리플 킬",
    4: "쿼드라 킬",
    5: "펜타 킬",
  };

  return (
    <div
      className={`flex items-center justify-between ${
        gameResult ? "bg-blue-100" : "bg-red-100"
      }  rounded-lg overflow-hidden h-[100px] mb-4 shadow-md`}
    >
      <div
        className={`${
          gameResult ? "bg-[#5383E8]" : "bg-red-600"
        }  h-full w-[5px] mr-2`}
      ></div>
      <div className="flex flex-row w-1/2 items-center">
        <div className="flex flex-col text-xs lg:text-xs mr-6">
          <span
            className={` ${
              gameResult ? "text-[#5383E8]" : "text-red-600"
            } font-bold text-md lg:text-md`}
          >
            {gameResult ? "승리" : "패배"}
          </span>
          <span className="lg:mt-0 mt-2">
            {durationMin}분 {durationSec}초
          </span>
        </div>
        <div className="rounded-full h-[70px] w-[70px] lg:h-[90px] lg:w-[90px] mr-8 overflow-hidden">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.15.1/img/champion/${champion}.png`}
          />
        </div>
      </div>
      <div className="w-1/2 flex flex-row">
        <div className="flex flex-col w-1/2 border-l border-gray-300 p-2 text-xs lg:text-sm">
          <div className="w-full">
            <span>{kills} </span>/
            <span className="text-pink-500"> {deaths} </span>/
            <span> {assists}</span>
          </div>
          <span className="text-xs text-gray-500 opacity-75">
            {kdaTruncated}:1 평점
          </span>
        </div>
        <span
          className={`${
            largestMultiKill === 0 || largestMultiKill === 1 ? "hidden" : "flex"
          } bg-red-600 h-[25px] p-2 w-auto text-white rounded-2xl flex justify-center items-center text-xs`}
        >
          {multikills[largestMultiKill]}
        </span>
      </div>
    </div>
  );
};

export default MatchCard;
