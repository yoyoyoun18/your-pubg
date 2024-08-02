import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const gameName = searchParams.get("gameName");
  const tagLine = searchParams.get("tagLine");

  if (!gameName || !tagLine) {
    return NextResponse.json(
      { error: "Missing gameName or tagLine" },
      { status: 400 }
    );
  }

  try {
    const { data } = await axios.get(
      `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}`,
      {
        params: {
          api_key: process.env.RIOT_API_KEY,
        },
      }
    );
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching Riot account:", error);
    return NextResponse.json(
      { error: "Error fetching Riot account" },
      { status: 500 }
    );
  }
}
