"use client";

import { ISize } from "@/interfaces";
import { Box, Button } from "@mui/material";
import React, { FC } from "react";

interface Props {
  selectedSize: ISize;
  sizes: ISize[];
}

const SizeSelector: FC<Props> = ({ selectedSize, sizes }) => {
  return (
    <Box marginTop={2}>
      {sizes.map((size) => {
        return (
          <Button
            key={size}
            size="small"
            color={selectedSize === size ? "primary" : "info"}
            sx={{ mr: 1 }}
          >
            {size}
          </Button>
        );
      })}
    </Box>
  );
};

export default SizeSelector;
