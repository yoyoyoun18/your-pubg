import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const puuid = searchParams.get("puuid");

  if (!puuid) {
    return NextResponse.json(
      { error: "Missing gameName or tagLine" },
      { status: 400 }
    );
  }

  try {
    const { data } = await axios.get(
      `https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-puuid/${puuid}`,
      {
        params: {
          api_key: process.env.RIOT_API_KEY,
        },
      }
    );
    console.log("puuid 정상적으로 전달 받고 요청 드감");
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Riot account:", error);
    return NextResponse.json(
      { error: "Error fetching Riot account" },
      { status: 500 }
    );
  }
}
