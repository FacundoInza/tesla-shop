import { MetadataPage } from "@/interfaces";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";

const metadata: MetadataPage = {
  title: "Login",
  description: "Login page for the shop",
};

const LoginPage = () => {
  return (
    <Box
      sx={{
        width: 350,
        padding: "30px",
        borderRadius: "15px",
        backgroundColor: "white",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h1" component="h1">
            Log in
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <TextField label="Email" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <TextField label="Password" variant="filled" fullWidth />
        </Grid>

        <Grid item xs={12}>
          <Button
            color="secondary"
            className="circular-btn"
            size="large"
            fullWidth
          >
            Log in
          </Button>
        </Grid>

        <Grid item xs={12} display={"flex"} justifyContent={"end"}>
          <Link
            href="/auth/register"
            style={{ textDecoration: "none", color: "black" }}
          >
            You don't have an account? Register
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginPage;
