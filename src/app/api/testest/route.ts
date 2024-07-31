import { NextResponse } from "next/server";
import path from "path";
import { promises as fs } from "fs";

export async function GET() {
  const test = "test";
  return NextResponse.json({ test });
}
