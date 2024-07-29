import path from "path";
import { promises as fs } from "fs";
import dayjs from "dayjs";
import { NextResponse } from "next/server";
import "dayjs/locale/ko"; // Import Korean locale
import customParseFormat from "dayjs/plugin/customParseFormat"; // Import customParseFormat plugin

dayjs.extend(customParseFormat); // Extend dayjs with customParseFormat plugin
dayjs.locale("ko"); // Set dayjs locale to Korean

interface Match {
  date: string;
  teams: string[];
  time: string;
}

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), "public");
    const fileContents = await fs.readFile(
      path.join(jsonDirectory, "lckSchedule.json"),
      "utf8"
    );
    const schedule: Match[] = JSON.parse(fileContents);

    // Format today's date with Korean day of the week
    const today = dayjs().format("MM월 DD일 (dd)");
    const now = dayjs();

    console.log("Today:", today);
    console.log("Schedule:", schedule);

    // 오늘의 경기 찾기
    let todayMatch = schedule.find((match) => {
      const matchDate = dayjs(match.date, "MM월 DD일 (dd)");
      console.log(
        `Checking match date: ${match.date} -> ${matchDate.format(
          "MM월 DD일 (dd)"
        )}`
      );
      return matchDate.format("MM월 DD일 (dd)") === today;
    });
    console.log("Today Match:", todayMatch);

    if (!todayMatch) {
      // 가장 가까운 다음 경기 찾기
      const upcomingMatches = schedule.filter((match) => {
        const matchDate = dayjs(match.date, "MM월 DD일 (dd)");
        console.log(
          `Upcoming match date: ${match.date} -> ${matchDate.format(
            "MM월 DD일 (dd)"
          )}`
        );
        return matchDate.isAfter(now);
      });
      console.log("Upcoming Matches:", upcomingMatches);

      if (upcomingMatches.length > 0) {
        todayMatch = upcomingMatches.reduce((closest, match) => {
          const matchDate = dayjs(match.date, "MM월 DD일 (dd)");
          const closestDate = dayjs(closest.date, "MM월 DD일 (dd)");
          console.log(
            `Comparing dates: ${matchDate.format(
              "MM월 DD일 (dd)"
            )} < ${closestDate.format("MM월 DD일 (dd)")}`
          );
          return matchDate.isBefore(closestDate) ? match : closest;
        });
        console.log("Next Match:", todayMatch);
      }
    }

    return NextResponse.json({ match: todayMatch });
  } catch (error) {
    console.error("Error reading or parsing lckSchedule.json:", error);
    return NextResponse.json(
      { error: "Failed to load schedule" },
      { status: 500 }
    );
  }
}
