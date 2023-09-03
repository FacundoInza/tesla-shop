"use client";

import React, { useContext } from "react";

import { SearchOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import NextLink from "next/link";
import { usePathname } from "next/navigation";
import { UiContext } from "@/context";

const Navbar = () => {
  const asPath = usePathname();

  const { toggleSideMenu } = useContext(UiContext);

  return (
    <AppBar>
      <Toolbar>
        <NextLink
          href="/"
          style={{
            textDecoration: "none",
            color: "black",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">Teslo | </Typography>
          <Typography variant="h6" sx={{ ml: 1 }}>
            Shop
          </Typography>
        </NextLink>

        <Box flex={1}></Box>

        <Box sx={{ display: { xs: "none", sm: "block" } }}>
          <NextLink href={"/category/men"}>
            <Button color={asPath === "/category/men" ? "primary" : "info"}>
              Hombres
            </Button>
          </NextLink>

          <NextLink href={"/category/women"}>
            <Button color={asPath === "/category/women" ? "primary" : "info"}>
              Women
            </Button>
          </NextLink>

          <NextLink href={"/category/kids"}>
            <Button color={asPath === "/category/kid" ? "primary" : "info"}>
              Kids
            </Button>
          </NextLink>
        </Box>

        <Box flex={1}></Box>

        <IconButton>
          <SearchOutlined />
        </IconButton>

        <NextLink href={"/cart"}>
          <IconButton>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </IconButton>
        </NextLink>

        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
