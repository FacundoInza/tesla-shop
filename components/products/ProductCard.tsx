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
import React, { FC, Suspense, useMemo, useState } from "react";
import NextLink from "next/link";
import ProductImage from "./ProductImage";

interface Props {
  product: IProduct;
}

const ProductCard: FC<Props> = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  const productImage = useMemo(() => {
    return isHovered
      ? `/products/${product.images[1]}`
      : `/products/${product.images[0]}`;
  }, [isHovered, product.images]);

  return (
    <Grid
      item
      xs={12}
      sm={6}
      lg={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Card>
        <NextLink href={`/product/${product.slug}`} passHref>
          <CardActionArea>
            <Suspense
              fallback={
                <Skeleton
                  variant="rectangular"
                  height={"calc(100vh - 470px)"}
                />
              }
            >
              <ProductImage
                producTitle={product.title}
                productImage={productImage}
              />
            </Suspense>
          </CardActionArea>
        </NextLink>
      </Card>

      <Box sx={{ mt: 1 }} className="fadein">
        <Typography fontWeight={700}>{product.title}</Typography>
        <Typography fontWeight={500}>${product.price}</Typography>
      </Box>
    </Grid>
  );
};

export default ProductCard;
