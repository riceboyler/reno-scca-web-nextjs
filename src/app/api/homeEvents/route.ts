import { NextResponse } from "next/server";
import { getConnection } from "@/db/db";
import type { ScheduledEventModel } from "@/db/models/ScheduledEvent.model";

export async function GET() {
  try {
    const pool = await getConnection();
    const today = new Date().toISOString().substring(0, 19).replace('T', ' ');
    const result = await pool
      .request()
      .query(
        `SELECT TOP 10 * FROM ScheduledEvents WHERE Date >= '${today}'`
      );
    return NextResponse.json(result.recordset as ScheduledEventModel[]);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
