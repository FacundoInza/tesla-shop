import { initialData } from "@/database/products";
import { IProduct } from "@/interfaces";
import {
  Box,
  Button,
  CardActionArea,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React, { FC } from "react";
import NextLink from "next/link";
import ItemCounter from "../ui/ItemCounter";

const productsInCart: any = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
];

const CartList: FC = () => {
  return (
    <>
      {productsInCart.map((product: IProduct) => (
        <Grid container key={product.slug}>
          <Grid item xs={3}>
            <NextLink href={"/products/slug"}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`products/${product.images[0]}`}
                  alt={product.title}
                  sx={{ borderRadius: 5 }}
                />
              </CardActionArea>
            </NextLink>
          </Grid>
          <Grid item xs={7}>
            <Box flexDirection={"column"} display="flex">
              <Typography variant="body1">{product.title}</Typography>
              <Typography variant="body2">{product.description}</Typography>
              <ItemCounter />
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            display={"flex"}
            alignItems={"center"}
            flexDirection={"column"}
          >
            <Typography variant="body1" fontWeight={"bold"}>
              ${product.price}
            </Typography>
            <Button variant="text" color="secondary">
              Remove
            </Button>
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CartList;
