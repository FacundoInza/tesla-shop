import CartList from "@/components/cart/CartList";

import OrdenSummary from "@/components/cart/OrdenSummary";
import { MetadataPage } from "@/interfaces";
import {
  Box,
  Button,
  Card,
  CardContent,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import Link from "next/link";
import React from "react";

const metadata: MetadataPage = {
  title: "Summary",
  description: "Summary page confirmation",
};

const SummaryPage = () => {
  return (
    <>
      <Typography variant="h1" component="h1">
        Cart
      </Typography>

      <Grid container>
        <Grid item xs={12} sm={7}>
          <CartList />
        </Grid>
        <Grid item xs={12} sm={5}>
          <Card className="summary-card">
            <CardContent>
              <Typography variant="h2">Summary (3 products)</Typography>
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

              <Button
                color="secondary"
                sx={{ borderRadius: "45px", width: "100%", mt: 3 }}
              >
                Confirm
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default SummaryPage;
