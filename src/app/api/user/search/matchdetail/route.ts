import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import useUserStore from "@/store/useUserStore";

export async function GET(request: NextRequest) {
  const { matches } = useUserStore.getState().targetUser;

  if (!matches || matches.length === 0) {
    return NextResponse.json({ error: "No matches found" }, { status: 400 });
  }

  try {
    const requests = matches.map((matchId) =>
      axios.get(
        `https://asia.api.riotgames.com/lol/match/v5/matches/KR_7210151713`,
        {
          params: {
            api_key: process.env.RIOT_API_KEY,
          },
        }
      )
    );

    const responses = await axios.all(requests);
    const matchesData = responses.map((response) => response.data);

    return NextResponse.json(matchesData);
  } catch (error) {
    console.error("Error fetching Riot matches:", error);
    return NextResponse.json(
      { error: "Error fetching Riot matches" },
      { status: 500 }
    );
  }
}
