import React from "react";

import ProductSlideShow from "@/components/products/ProductSlideShow";
import ItemCounter from "@/components/ui/ItemCounter";
import { initialData } from "@/database/products";
import { MetadataPage } from "@/interfaces";
import { Box, Button, Chip, Grid, Typography } from "@mui/material";
import SizeSelector from "@/components/products/SizeSelector";

const metadata: MetadataPage = {
  title: "Product Page",
  description: "Product Page",
};

const product = initialData.products[0];

const ProductPage = ({ params }: { params: { slug: string } }) => {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={7}>
        <ProductSlideShow images={product.images} />
      </Grid>

      <Grid item xs={12} sm={5}>
        <Box display="flex" flexDirection="column">
          {/* Tittle */}
          <Typography variant="h1" component="h1">
            {product.title}
          </Typography>
          <Typography variant="subtitle1" component="h2">
            ${product.price}
          </Typography>

          <Box sx={{ my: 2 }}>
            <Typography variant="subtitle1" fontWeight={"bold"}>
              Cantidad
            </Typography>
            <ItemCounter />
            <SizeSelector
              selectedSize={product.sizes[0]}
              sizes={product.sizes}
            />
          </Box>

          {/* Add to cart */}

          <Button
            color="secondary"
            className="circular-btn"
            sx={{ borderRadius: "45px" }}
          >
            Add to cart
          </Button>

          {/* <Chip
            label="There are no available"
            color="error"
            variant="outlined"
          /> */}

          {/* Description */}

          <Box sx={{ mt: 3 }}>
            <Typography variant="subtitle2" fontWeight={"bold"}>
              Description
            </Typography>
            <Typography variant="body1">{product.description}</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ProductPage;
