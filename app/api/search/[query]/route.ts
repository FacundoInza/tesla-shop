import { db } from "@/database";
import { Product } from "@/models";

import { NextResponse } from "next/server";

var qs = require("qs");

export async function GET(
  req: Request,
  { params }: { params: { query: string } }
) {
  let { query = "" } = params;

  if (query.length === 0) {
    return NextResponse.json({ message: "Bad query" }, { status: 400 });
  }

  query = query.toString().toLowerCase();

  await db.connect;

  const products = await Product.find({
    $text: { $search: query },
  }).lean();

  await db.disconnect;

  if (!products) {
    return NextResponse.json(
      { message: `Bad query : ${query}` },
      { status: 400 }
    );
  }

  return NextResponse.json(products, { status: 200 });
}
