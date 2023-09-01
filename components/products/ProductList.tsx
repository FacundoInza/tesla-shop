import { IProduct } from "@/interfaces";
import { Grid } from "@mui/material";
import React, { FC } from "react";
import ProductCard from "./ProductCard";

async function getProducts(): Promise<IProduct[]> {
  const res = await fetch("http://localhost:3000/api/products");

  return res.json();
}

const ProductList: FC = async () => {
  const products: IProduct[] = await getProducts();

  return (
    <Grid container spacing={4} m={0}>
      <Grid container spacing={4}>
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </Grid>
    </Grid>
  );
};

export default ProductList;
