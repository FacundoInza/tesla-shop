import { SHOP_CONSTANTS, db } from "@/database";
import { Product } from "@/models";

import { NextResponse } from "next/server";
import { IProduct } from "../../../../interfaces/IProduct";
var qs = require("qs");

export async function GET(
  req: Request,
  { params }: { params: { slug: string } }
) {
  await db.connect;

  const product = await Product.findOne({ slug: params.slug })
    .lean()
    .select("title images price inStock slug -_id");

  await db.disconnect;

  if (!product) {
    return NextResponse.json(
      { message: `Bad request : ${params.slug} ` },
      { status: 400 }
    );
  }

  return NextResponse.json(product, { status: 200 });
}
