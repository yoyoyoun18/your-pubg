import { NextResponse } from "next/server";
import puppeteer from "puppeteer";
import fs from "fs/promises";
import { join } from "path";

export async function GET() {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true, // 브라우저를 시각적으로 볼 수 있게 합니다
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    // 타임아웃을 60초로 증가
    await page.goto(
      "https://game.naver.com/esports/League_of_Legends/record/lck/team/lck_2024_summer",
      {
        waitUntil: "networkidle2",
        timeout: 60000,
      }
    );

    // 특정 요소가 로드될 때까지 기다림
    await page.waitForSelector(".record_list_team__2NtZO", { timeout: 60000 });

    const teamRankings = await page.evaluate(() => {
      const rankings: any = [];
      const teamElements = document.querySelectorAll(
        ".record_list_team__2NtZO li"
      );

      teamElements.forEach((element, index) => {
        const rank = element
          .querySelector(".record_list_rank__3mn_o")
          ?.textContent?.trim();
        const name = element
          .querySelector(".record_list_name__27huQ")
          ?.textContent?.trim();

        if (name) {
          rankings.push({ rank: rank || (index + 1).toString(), name });
        }
      });

      return rankings;
    });

    console.log("Team rankings:", teamRankings);

    const jsonData = JSON.stringify({ rankings: teamRankings }, null, 2);
    const filePath = join(process.cwd(), "public", "lck-rankings.json");

    await fs.writeFile(filePath, jsonData);

    return NextResponse.json({
      success: true,
      message: "LCK team rankings updated",
      data: teamRankings,
    });
  } catch (error) {
    console.error("Error updating LCK team rankings:", error);
    return NextResponse.json(
      { success: false, message: "Failed to update LCK team rankings" },
      { status: 500 }
    );
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}
