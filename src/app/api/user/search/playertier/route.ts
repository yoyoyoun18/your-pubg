import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const encryptedId = searchParams.get("encryptedId");

  if (!encryptedId) {
    return NextResponse.json({ error: "Missing encryptedId" }, { status: 400 });
  }

  try {
    const { data } = await axios.get(
      `https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/${encryptedId}`,
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
