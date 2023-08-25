"use client";

import { IProduct } from "@/interfaces";
import {
  Box,
  Card,
  CardActionArea,
  CardMedia,
  Grid,
  Skeleton,
  Typography,
} from "@mui/material";
import React, { FC, Suspense, useEffect, useMemo, useState } from "react";

interface Props {
  product: IProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `products/${product.images[1]}`
      : `products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={6}
      sm={4}
      key={product.slug}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <CardActionArea>
          <CardMedia
            component="img"
            image={productImage}
            className="fadein"
            alt={product.title}
            onLoad={() => (
              <Skeleton variant="rectangular" width={210} height={60} />
            )}
          />
        </CardActionArea>
      </Card>

      <Box sx={{ mt: 1 }} className="fadein">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  );
};

export default ProductCard;
