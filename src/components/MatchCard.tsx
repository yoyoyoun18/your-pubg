import useMatchDetailsStore from "@/store/useMatchDetailsStore";
import useUserStore from "@/store/useUserStore";
import React from "react";
import DamageBar from "./DamageBar";

function extractAfterUnderscore(text: string): string {
  // 스킨 이름을 챔피언 이름으로 필터링해주는 함수 ex)Strawberry_Riven을 _ 이후의 것으로만 필터링하여 Riven으로
  const underscoreIndex = text?.indexOf("_");
  if (underscoreIndex !== -1) {
    return text?.slice(underscoreIndex + 1);
  } else {
    return text;
  }
}

function formatTimeAgo(timestamp: number): string {
  /* 유닉스 시간을 현재의 시간과 비교하여 몇 시간 혹은 며칠 전인지를 표기해주는 함수
  24시간 이하의 시간만 n시간적으로 표기하고 그 이후는 n일 전 이런 식으로 표기 */

  const now = new Date().getTime();
  const diff = now - timestamp;

  const seconds = diff / 1000;
  const minutes = seconds / 60;
  const hours = minutes / 60;
  const days = hours / 24;

  if (hours < 24) {
    return `${Math.floor(hours)}시간 전`;
  } else {
    return `${Math.floor(days)}일 전`;
  }
}

const MatchCard = ({ index }: any) => {
  const { matches } = useUserStore((state) => state.targetUser);
  const { matchDetails } = useMatchDetailsStore();
  const gameResult = matchDetails[index]?.info.participants[0].win;
  const champion = extractAfterUnderscore(
    matchDetails[index]?.info.participants[0].championName
  );
  const durationMin = (matchDetails[index]?.info.gameDuration / 60) | 0;
  const durationSec = matchDetails[index]?.info.gameDuration % 60;
  const kills = matchDetails[index]?.info.participants[0].kills;
  const deaths = matchDetails[index]?.info.participants[0].deaths;
  const assists = matchDetails[index]?.info.participants[0].assists;
  const kda = (kills + assists) / deaths;
  const gameEndTimestamp = matchDetails[index]?.info.gameEndTimestamp;
  const timeAgo = formatTimeAgo(gameEndTimestamp);
  const totalDamageDealtToChampions =
    matchDetails[index]?.info.participants[0].totalDamageDealtToChampions;
  const totalDamageTaken =
    matchDetails[index]?.info.participants[0].totalDamageTaken;
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
  const items = [
    matchDetails[index]?.info.participants[0].item0,
    matchDetails[index]?.info.participants[0].item1,
    matchDetails[index]?.info.participants[0].item2,
    matchDetails[index]?.info.participants[0].item3,
    matchDetails[index]?.info.participants[0].item4,
    matchDetails[index]?.info.participants[0].item5,
  ];

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
        <div className="flex flex-col text-xs lg:text-xs mr-6 w-[60px]">
          <span
            className={`${
              gameResult ? "text-[#5383E8]" : "text-red-600"
            } font-bold text-md lg:text-md`}
          >
            {gameResult ? "승리" : "패배"}
          </span>
          <span className="lg:mt-0 mt-2">
            {durationMin}분 {durationSec}초
          </span>
          <span className="mt-4 opacity-75">{timeAgo}</span>
        </div>
        <div className="rounded-full h-[70px] w-[70px] lg:h-[80px] lg:w-[80px] mr-8 overflow-hidden">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/14.15.1/img/champion/${champion}.png`}
            alt={`${champion}`}
          />
        </div>
        <div className="grid grid-cols-3 gap-2 mr-2">
          {items.map((a, i) => (
            <span
              key={i}
              className={`${
                a === 0 && "hidden"
              }  h-[30px] w-[30px] bg-gray-200`}
            >
              <img
                src={`https://ddragon.leagueoflegends.com/cdn/14.15.1/img/item/${a}.png`}
              />
            </span>
          ))}
        </div>
      </div>

      <div className="w-1/2 flex flex-row">
        <div className="flex flex-col justify-center w-1/3 border-l border-gray-300 p-2 text-xs lg:text-sm">
          <div className="w-full">
            <span>{kills} </span>/
            <span className="text-pink-500"> {deaths} </span>/
            <span> {assists}</span>
          </div>
          <span className="text-xs text-gray-500 opacity-75">
            {deaths !== 0 ? kdaTruncated + ":1 평점" : "Perfect"}
          </span>
        </div>
        <div className="w-1/3">
          <DamageBar
            totalDamageDealtToChampions={totalDamageDealtToChampions}
            totalDamageTaken={totalDamageTaken}
          />
        </div>
        <div className="p-4">
          <span
            className={`${
              largestMultiKill === 0 || largestMultiKill === 1
                ? "hidden"
                : "flex"
            } bg-red-600 h-[25px] p-2 w-auto text-white rounded-2xl flex justify-center items-center text-xs`}
          >
            {multikills[largestMultiKill]}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MatchCard;
