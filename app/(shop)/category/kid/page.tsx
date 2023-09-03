import ProductList from "@/components/products/ProductList";
import { Typography } from "@mui/material";
import React, { Suspense } from "react";
import Loading from "../../loading";

const KidsPage = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Shop - Kids
      </Typography>
      <Typography variant="h2" sx={{ mb: 1 }}>
        All products for kids
      </Typography>
      <Suspense fallback={<Loading />}>
        <ProductList category="kid" />
      </Suspense>
    </>
  );
};

export default KidsPage;
