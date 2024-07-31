import axios from "axios";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

dotenv.config();

const RIOT_API_URL = "https://kr.api.riotgames.com/lol";
const RIOT_ACCOUNT_API_URL = "https://asia.api.riotgames.com/riot";
const apiKey = process.env.RIOT_API_KEY;

if (!apiKey) {
  throw new Error("API key is missing");
}

// Helper function to add delay
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function GET() {
  try {
    // 1. Fetch challenger league data
    const response = await axios.get(
      `${RIOT_API_URL}/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5`,
      {
        headers: {
          "X-Riot-Token": apiKey!,
        },
      }
    );

    // Sort and get top 10 entries
    const sortedEntries = response.data.entries
      .sort((a: any, b: any) => b.leaguePoints - a.leaguePoints)
      .slice(0, 10);

    // 2. Fetch summoner data for top 10 players
    const summonerPromises = sortedEntries.map((entry: any) =>
      axios.get(`${RIOT_API_URL}/summoner/v4/summoners/${entry.summonerId}`, {
        headers: {
          "X-Riot-Token": apiKey!,
        },
      })
    );

    const summonerResponses = await Promise.all(summonerPromises);

    // 3. Fetch Riot IDs for top 10 players
    const riotIdPromises = summonerResponses.map((summonerResponse) =>
      axios.get(
        `${RIOT_ACCOUNT_API_URL}/account/v1/accounts/by-puuid/${summonerResponse.data.puuid}`,
        {
          headers: {
            "X-Riot-Token": apiKey!,
          },
        }
      )
    );

    const riotIdResponses = await Promise.all(riotIdPromises);

    // Combine all data
    const entriesWithNames = sortedEntries.map((entry: any, index: number) => ({
      ...entry,
      summonerName: riotIdResponses[index].data.gameName,
      tagLine: riotIdResponses[index].data.tagLine,
    }));

    // Add a small delay to avoid hitting rate limits
    await delay(1000);

    return NextResponse.json(
      { ...response.data, entries: entriesWithNames },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Error fetching leaderboard data:", error.message);
    // Error handling code...
  }
}
