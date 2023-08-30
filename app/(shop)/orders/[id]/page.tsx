"use client";

import CartList from "@/components/cart/CartList";

import OrdenSummary from "@/components/cart/OrdenSummary";
import { MetadataPage } from "@/interfaces";
import {
  CreditCardOffOutlined,
  CreditScoreOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const metadata: MetadataPage = {
  title: "Order Summary Page ",
  description: "Summary page confirmation",
};

const OrderPage = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Order: ASD#421
      </Typography>

      {/* <Chip
        sx={{ my: 2 }}
        label="Pending payment"
        variant="outlined"
        color="error"
        icon={<CreditCardOffOutlined />}
      /> */}

      <Chip
        sx={{ my: 2 }}
        label="Paid"
        variant="outlined"
        color="success"
        icon={<CreditScoreOutlined />}
      />

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Order: ASD#421 </Typography>
              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent={"space-between"}>
                <Typography variant="subtitle1">Address</Typography>
                <Link
                  href="/checkout/address"
                  passHref
                  style={{ color: "black" }}
                >
                  Edit
                </Link>
              </Box>
              <Typography variant="body1">1234 Main St. Suite 1234</Typography>
              <Typography variant="body1">John</Typography>
              <Typography variant="body1">Springfield, ST 54321</Typography>
              <Typography variant="body1">United States</Typography>
              <Typography variant="body1">Phone: 123-456-7890</Typography>

              <Divider sx={{ my: 1 }} />

              <Box display="flex" justifyContent={"end"}>
                <Link href="/cart" passHref style={{ color: "black" }}>
                  Edit
                </Link>
              </Box>

              <OrdenSummary />

              <Box sx={{ mt: 3 }}>
                {/* TODO */}
                <h1>Pagar</h1>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default OrderPage;
