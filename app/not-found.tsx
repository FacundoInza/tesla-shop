import { MetadataPage } from "@/interfaces";
import { Box, Typography } from "@mui/material";
import React from "react";

export const metadata: MetadataPage = {
  title: "Not Found",
  description: "Not Found",
};

const NotFound = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={"calc(100vh - 200px)"}
      sx={{ flexDirection: { xs: "column", sm: "row" } }}
    >
      <Typography variant="h1" component="h1" fontSize={100} fontWeight={100}>
        404 |
      </Typography>
      <Typography marginLeft={2}>Not found any page here</Typography>{" "}
    </Box>
  );
};

export default NotFound;
