import { db, seedDatabase } from "@/database";
import { Product } from "@/models";
import { NextRequest, NextResponse } from "next/server";

interface Data {
  message: string;
}

export async function GET(req: NextRequest) {
  if (process.env.NODE_ENV === "production") {
    return NextResponse.json({ message: "Unauthorized" });
  }

  await db.connect();

  await Product.deleteMany();
  await Product.insertMany(seedDatabase.initialData.products);

  await db.disconnect();

  return NextResponse.json({ message: "Database seeded" });
}
