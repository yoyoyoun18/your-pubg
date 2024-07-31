import path from "path";
import { promises as fs } from "fs";
import dayjs from "dayjs";
import { NextResponse } from "next/server";
import "dayjs/locale/ko"; // Import Korean locale
import customParseFormat from "dayjs/plugin/customParseFormat"; // Import customParseFormat plugin

dayjs.extend(customParseFormat); // Extend dayjs with customParseFormat plugin
dayjs.locale("ko"); // Set dayjs locale to Korean

interface playerRank {
  rank: string;
  name: string;
  point: string;
}

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), "public");
    const fileContents = await fs.readFile(
      path.join(jsonDirectory, "player-rankings.json"),
      "utf8"
    );
    const teamRank: playerRank[] = JSON.parse(fileContents);

    return NextResponse.json({ match: teamRank });
  } catch (error) {
    console.error("Error reading or parsing lckSchedule.json:", error);
    return NextResponse.json(
      { error: "Failed to load schedule" },
      { status: 500 }
    );
  }
}
