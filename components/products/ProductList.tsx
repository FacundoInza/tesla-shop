import { IProduct } from "@/interfaces";
import { Grid } from "@mui/material";
import React, { FC } from "react";
import ProductCard from "./ProductCard";

interface Props {
  products: IProduct[];
}

const ProductList: FC<Props> = ({ products }) => {
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
