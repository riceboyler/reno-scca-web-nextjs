import { getConnection } from "@/db/db";
import type { GalleryModel } from "@/db/models/Gallery.model";
import { NextResponse } from "next/server";

export async function GET(_req: Request, ctx: RouteContext<'/api/gallery/[eventId]'>) {
  const { eventId } = await ctx.params;
  try {
    const pool = await getConnection();
    const result = await pool.request().query(`SELECT * FROM Gallery WHERE ID = ${eventId}`);
    return NextResponse.json(result.recordset as GalleryModel[]);
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
