import { NextResponse } from "next/server";
import { getConnection } from "@/db/db";
import type { QuickLinkModel } from "@/db/models/QuickLink.model";

export async function GET() {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM HomeNews");
    return NextResponse.json(result.recordset as QuickLinkModel[]);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
