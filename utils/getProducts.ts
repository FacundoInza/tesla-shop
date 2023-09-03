import { IProduct } from "@/interfaces";

export async function getProducts(asPath: string): Promise<IProduct[]> {
  console.log(asPath);

  const res = await fetch(`http://localhost:3000/api${asPath}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
}
