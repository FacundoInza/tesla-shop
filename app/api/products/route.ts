import { SHOP_CONSTANTS, db } from "@/database";
import { Product } from "@/models";

import { NextRequest, NextResponse } from "next/server";
var qs = require("qs");

export async function GET(req: Request) {
  const queryStr = req.url.split("?")[1] || "";

  const query = qs.parse(queryStr);

  const { gender = "all" }: { gender: string } = query;

  let condition = {};

  if (gender !== "all" && SHOP_CONSTANTS.validGenders.includes(`${gender}`)) {
    condition = { gender };
  }

  await db.connect;

  const products = await Product.find(condition)
    .lean()
    .select("title images price inStock slug -_id");

  await db.disconnect;

  return NextResponse.json(products, { status: 200 });
}
