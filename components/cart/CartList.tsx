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

interface Props {
  editable?: boolean;
}

const CartList: FC<Props> = ({ editable = false }) => {
  return (
    <>
      {productsInCart.map((product: IProduct) => (
        <Grid container key={product.slug} mt={2}>
          <Grid item xs={3}>
            <NextLink href={"/products/slug"}>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={`/products/${product.images[0]}`}
                  alt={product.title}
                  sx={{ borderRadius: 5 }}
                />
              </CardActionArea>
            </NextLink>
          </Grid>
          <Grid item xs={7} pl={2}>
            <Box flexDirection={"column"} display="flex">
              <Typography variant="subtitle1">{product.title}</Typography>
              <Box display={"flex"} alignItems={"center"}>
                <Typography variant="body1">Talla:</Typography>
                <Typography variant="subtitle1" ml={1}>
                  {product.sizes[0]}
                </Typography>
              </Box>

              {editable ? (
                <ItemCounter />
              ) : (
                <Typography variant="subtitle1">Quantity: 1</Typography>
              )}
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
            {editable && (
              <Button variant="text" color="secondary">
                Remove
              </Button>
            )}
          </Grid>
        </Grid>
      ))}
    </>
  );
};

export default CartList;
