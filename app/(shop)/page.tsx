import React from "react";
import { MetadataPage } from "@/interfaces";
import {
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import ProductList from "@/components/products/ProductList";
import { initialData } from "@/database/products";

export const metadata: MetadataPage = {
  title: "Tesla Shop",
  description: "Encuntra todos los productos de Tesla",
  manifest: "https://example.com/image.png",
};

export default function Page() {
  return (
    <>
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>

      <ProductList products={initialData.products as any} />
    </>
  );
}
