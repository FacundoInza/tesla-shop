"use client";

import { AddCircleOutline, RemoveCircleOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import React, { FC } from "react";

const ItemCounter: FC = () => {
  return (
    <Box display={"flex"} alignItems={"center"}>
      <IconButton>
        <RemoveCircleOutline />
      </IconButton>
      <Typography variant="body1" margin={1}>
        1
      </Typography>
      <IconButton>
        <AddCircleOutline />
      </IconButton>
    </Box>
  );
};

export default ItemCounter;
