import { NextResponse } from "next/server";
import { getPortfolioShowcaseItems } from "@/lib/portfolio-showcase-data";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const pathname = searchParams.get("pathname") ?? "";

  const items = await getPortfolioShowcaseItems(pathname);
  return NextResponse.json({ items });
}
