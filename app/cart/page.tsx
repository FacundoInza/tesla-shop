import CartList from "@/components/cart/CartList";
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
import React from "react";

const metadata: MetadataPage = {
  title: "Cart",
  description: "Cart",
};

const page = () => {
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
              <Typography variant="h2">Orden</Typography>
              <Divider sx={{ my: 1 }} />

              {/* Order Summary */}

              <Box sx={{ mt: 3 }}>
                <Button color="secondary" variant="contained">
                  Checkout
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default page;
