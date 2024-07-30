import axios from "axios";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

// .env 파일에서 환경 변수 로드
dotenv.config();

const RIOT_API_URL = "https://kr.api.riotgames.com/lol";
const RIOT_ACCOUNT_API_URL = "https://asia.api.riotgames.com/riot";
const apiKey = process.env.RIOT_API_KEY;

if (!apiKey) {
  throw new Error("API key is missing");
}

// summonerId로 puuid와 summonerName을 가져오는 함수
const fetchSummonerPuuidAndName = async (summonerId: string) => {
  try {
    const response = await axios.get(
      `${RIOT_API_URL}/summoner/v4/summoners/${summonerId}`,
      {
        headers: {
          "X-Riot-Token": apiKey!,
        },
      }
    );
    const { puuid, name } = response.data;
    return { puuid, name };
  } catch (error: any) {
    console.error(
      `Error fetching puuid and name for summoner ID ${summonerId}:`,
      error.message
    );
    return { puuid: null, name: null };
  }
};

// puuid로 summonerName을 가져오는 함수
const fetchSummonerName = async (puuid: string) => {
  try {
    const response = await axios.get(
      `${RIOT_ACCOUNT_API_URL}/account/v1/accounts/by-puuid/${puuid}`,
      {
        headers: {
          "X-Riot-Token": apiKey!,
        },
      }
    );
    return response.data.gameName; // Riot ID의 이름 부분
  } catch (error: any) {
    console.error(
      `Error fetching summoner name for PUUID ${puuid}:`,
      error.message
    );
    return null;
  }
};

export async function GET() {
  try {
    const response = await axios.get(
      `${RIOT_API_URL}/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`,
      {
        headers: {
          "X-Riot-Token": apiKey!,
        },
      }
    );

    // 리더보드 데이터를 내림차순으로 정렬 후 상위 10개만 선택
    const sortedEntries = response.data.entries.sort(
      (a: any, b: any) => b.leaguePoints - a.leaguePoints
    );
    const topTenEntries = sortedEntries.slice(0, 10);

    // 각 소환사의 puuid와 summonerName을 비동기적으로 가져옴
    const entriesWithNames = await Promise.all(
      topTenEntries.map(async (entry: any) => {
        const { puuid, name } = await fetchSummonerPuuidAndName(
          entry.summonerId
        );
        const summonerName = puuid ? await fetchSummonerName(puuid) : name;
        return { ...entry, summonerName };
      })
    );

    return NextResponse.json(
      { ...response.data, entries: entriesWithNames },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching leaderboard data:", error.message);

    if (error.response) {
      console.error("Response data:", error.response.data);
      console.error("Response status:", error.response.status);
      console.error("Response headers:", error.response.headers);
      return NextResponse.json(
        { error: error.response.data },
        { status: error.response.status }
      );
    } else if (error.request) {
      console.error("No response received:", error.request);
      return NextResponse.json(
        { error: "No response from server" },
        { status: 500 }
      );
    } else {
      console.error("Request setup error:", error.message);
      return NextResponse.json(
        { error: "Request setup error" },
        { status: 500 }
      );
    }
  }
}
