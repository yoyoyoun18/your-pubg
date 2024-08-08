import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const puuid = searchParams.get("puuid");

  if (!puuid) {
    return NextResponse.json({ error: "Missing puuid" }, { status: 400 });
  }

  try {
    const [summonerData, matchesData] = await axios.all([
      axios.get(
        `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
        {
          params: {
            api_key: process.env.RIOT_API_KEY,
          },
        }
      ),
      axios.get(
        `https://asia.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids`,
        {
          params: {
            start: 0,
            count: 5,
            api_key: process.env.RIOT_API_KEY,
          },
        }
      ),
    ]);

    console.log("Successfully received data for both requests");
    return NextResponse.json({
      summoner: summonerData.data,
      matches: matchesData.data,
    });
  } catch (error) {
    console.error("Error fetching Riot data:", error);
    return NextResponse.json(
      { error: "Error fetching Riot data" },
      { status: 500 }
    );
  }
}
