import axios from "axios";
import { NextResponse } from "next/server";
import dotenv from "dotenv";

// .env 파일에서 환경 변수 로드
dotenv.config();

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;

  try {
    const response = await axios.get(
      "https://kr.api.riotgames.com/lol/league/v4/challengerleagues/by-queue/RANKED_SOLO_5x5",
      {
        headers: {
          "X-Riot-Token": apiKey!,
        },
      }
    );

    return NextResponse.json(response.data, { status: 200 });
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
