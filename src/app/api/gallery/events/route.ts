import { NextResponse } from "next/server";
import { getConnection } from "@/db/db";
import type { GalleryEventModel } from "@/db/models/GalleryEvent.model";

export async function GET() {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT DISTINCT Program, EventYear, EventDate, EventName FROM Gallery");
    return NextResponse.json(result.recordset as GalleryEventModel[]);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
