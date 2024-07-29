// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";

// const API_KEY = process.env.NEXT_PUBLIC_PUBG_API_KEY;
// const BASE_URL = "https://api.pubg.com/shards";

// const api = axios.create({
//   baseURL: BASE_URL,
//   headers: {
//     Authorization: `Bearer ${API_KEY}`,
//     Accept: "application/vnd.api+json",
//   },
// });

// export async function GET(req: NextRequest) {
//   const { searchParams } = new URL(req.url);
//   const platform = searchParams.get("platform");
//   const playerName = searchParams.get("playerName");

//   if (!platform || !playerName) {
//     return NextResponse.json(
//       { error: "Platform and playerName are required" },
//       { status: 400 }
//     );
//   }

//   try {
//     console.log(`Fetching player data for ${playerName} on ${platform}`);
//     const response = await api.get(`/${platform}/players`, {
//       params: { "filter[playerNames]": playerName },
//     });
//     console.log("Response data:", response.data);
//     return NextResponse.json(response.data, { status: 200 });
//   } catch (error: unknown) {
//     if (axios.isAxiosError(error)) {
//       console.error(
//         "Axios error fetching player data:",
//         error.response?.data || error.message
//       );
//       return NextResponse.json(
//         { error: error.response?.data || "Error fetching player data" },
//         { status: 500 }
//       );
//     } else {
//       console.error("Unexpected error:", error);
//       return NextResponse.json(
//         { error: "Unexpected error occurred" },
//         { status: 500 }
//       );
//     }
//   }
// }
