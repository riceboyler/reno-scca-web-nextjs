import { getConnection } from "@/db/db";
import type { RulesModel } from "@/db/models/Rules.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Rules WHERE PROGRAM <> 'Trials'");
    return NextResponse.json(result.recordset as RulesModel[]);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
