import { getConnection } from "@/db/db";
import type { DocumentModel } from "@/db/models/Document.model";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const pool = await getConnection();
    const result = await pool.request().query("SELECT * FROM Documents");
    return NextResponse.json(result.recordset as DocumentModel[]);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
