import React, { Suspense } from "react";
import { MetadataPage } from "@/interfaces";
import { Typography } from "@mui/material";

import ProductList from "@/components/products/ProductList";
import Loading from "./loading";

export const metadata: MetadataPage = {
  title: "Tesla Shop",
  description: "Encuntra todos los productos de Tesla",
  manifest: "https://example.com/image.png",
};

export default async function Page() {
  return (
    <>
      <Typography variant="h1" component="h1">
        Tienda
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        Todos los productos
      </Typography>
      <Suspense fallback={<Loading />}>
        <ProductList />
      </Suspense>
    </>
  );
}
