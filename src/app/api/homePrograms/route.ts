import { NextResponse } from "next/server";
import { getConnection } from "@/db/db";
import type { ProgramPageModel } from "@/db/models/ProgramPage.model";

export async function GET() {
  try {
    const pool = await getConnection();
    const result = await pool.request().query(`SELECT * FROM ProgramPages`);
    return NextResponse.json(result.recordset as ProgramPageModel[]);
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
