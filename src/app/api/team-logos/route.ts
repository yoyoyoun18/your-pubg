import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  try {
    const jsonDirectory = path.join(process.cwd(), "public");
    const fileContents = await fs.readFile(
      path.join(jsonDirectory, "teamLogos.json"),
      "utf8"
    );
    const teamLogos = JSON.parse(fileContents);
    return NextResponse.json(teamLogos);
  } catch (error) {
    console.error("Error reading or parsing teamLogos.json:", error);
    return NextResponse.json(
      { error: "Failed to load team logos" },
      { status: 500 }
    );
  }
}
