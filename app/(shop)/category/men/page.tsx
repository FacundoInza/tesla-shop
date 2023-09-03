import ProductList from "@/components/products/ProductList";
import { Typography } from "@mui/material";
import React, { Suspense } from "react";
import Loading from "../../loading";

const MensPage = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Shop - Mens
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        All products for Mens
      </Typography>
      <Suspense fallback={<Loading />}>
        <ProductList category="men" />
      </Suspense>
    </>
  );
};

export default MensPage;
