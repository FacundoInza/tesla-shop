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
import React from "react";

const Navbar = () => {
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
            <Button>Hombres</Button>
          </NextLink>

          <NextLink href={"/category/women"}>
            <Button>Women</Button>
          </NextLink>

          <NextLink href={"/category/kids"}>
            <Button>Kids</Button>
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

        <Button>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
