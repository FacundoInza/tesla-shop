"use client";

import { MetadataPage } from "@/interfaces";
import { RemoveShoppingCartOutlined } from "@mui/icons-material";
import { Box, Link, Typography } from "@mui/material";
import React from "react";
import NextLink from "next/link";

const metadata: MetadataPage = {
  title: "Empty Cart",
  description: "There are no products in the cart",
};

const EmptyPage = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 200px)"
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
    >
      <RemoveShoppingCartOutlined sx={{ fontSize: 100 }} />
      <Box display={"flex"} flexDirection={"column"} alignItems={"center"}>
        <Typography variant="h1" component="h1">
          There are no products in the cart
        </Typography>
        <NextLink href={"/"} passHref style={{ textDecoration: "none" }}>
          <Typography variant="h4" color={"secondary"}>
            Go to the store
          </Typography>
        </NextLink>
      </Box>
    </Box>
  );
};

export default EmptyPage;
