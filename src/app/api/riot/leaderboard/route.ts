// app/api/leaderboard/route.ts
import { NextResponse } from "next/server";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const RIOT_API_URL = "https://kr.api.riotgames.com/lol";
const RIOT_ACCOUNT_API_URL = "https://asia.api.riotgames.com/riot";
const apiKey = process.env.RIOT_API_KEY;

if (!apiKey) {
  throw new Error("API key is missing");
}

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
  try {
    const response = await axios.get(
      `${RIOT_API_URL}/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`,
      {
        headers: {
          "X-Riot-Token": apiKey,
        },
      }
    );

    const sortedEntries = response.data.entries
      .sort((a: any, b: any) => b.leaguePoints - a.leaguePoints)
      .slice(0, 10);

    const summonerPromises = sortedEntries.map((entry: any) =>
      axios.get(`${RIOT_API_URL}/summoner/v4/summoners/${entry.summonerId}`, {
        headers: {
          "X-Riot-Token": apiKey,
        },
      })
    );

    const summonerResponses = await Promise.all(summonerPromises);

    const riotIdPromises = summonerResponses.map((summonerResponse) =>
      axios.get(
        `${RIOT_ACCOUNT_API_URL}/account/v1/accounts/by-puuid/${summonerResponse.data.puuid}`,
        {
          headers: {
            "X-Riot-Token": apiKey,
          },
        }
      )
    );

    const riotIdResponses = await Promise.all(riotIdPromises);

    const entriesWithNames = sortedEntries.map((entry: any, index: number) => ({
      ...entry,
      summonerName: riotIdResponses[index].data.gameName,
      tagLine: riotIdResponses[index].data.tagLine,
    }));

    await delay(1000);

    return NextResponse.json(
      { ...response.data, entries: entriesWithNames },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching leaderboard data:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
