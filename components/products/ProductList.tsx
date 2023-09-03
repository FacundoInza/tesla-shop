"use client";

import { IProduct } from "@/interfaces";
import { Grid, Skeleton } from "@mui/material";
import React, { FC, Suspense } from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "@/utils/getProducts";
import { usePathname } from "next/navigation";

interface Props {
  category?: string;
}

const ProductList: FC<Props> = async () => {
  const pathname = usePathname();
  console.log(pathname);
  const products: IProduct[] = await getProducts(
    `/products?gender=${pathname !== "/" ? pathname.split("/")[2] : "all"}`
  );

  return (
    <Grid container spacing={4}>
      {products.map((product) => (
        <ProductCard key={product.slug} product={product} />
      ))}
    </Grid>
  );
};

export default ProductList;
