// File: app/api/user/search/match-details/route.ts

import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const matchId = searchParams.get("matchId");
  const targetPuuid = searchParams.get("targetPuuid");

  if (!matchId || !targetPuuid) {
    return NextResponse.json(
      { error: "Missing matchId or targetPuuid" },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(
      `https://asia.api.riotgames.com/lol/match/v5/matches/${matchId}`,
      {
        params: {
          api_key: process.env.RIOT_API_KEY,
        },
      }
    );

    const matchData = response.data;
    const targetParticipant = matchData.info.participants.find(
      (participant: { puuid: string }) => participant.puuid === targetPuuid
    );

    if (targetParticipant) {
      return NextResponse.json({
        ...matchData,
        info: {
          ...matchData.info,
          participants: [targetParticipant],
        },
      });
    } else {
      return NextResponse.json(
        { error: "Target participant not found" },
        { status: 404 }
      );
    }
  } catch (error) {
    console.error(`Error fetching match details for ${matchId}:`, error);
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: error.message },
        { status: error.response?.status || 500 }
      );
    }
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
