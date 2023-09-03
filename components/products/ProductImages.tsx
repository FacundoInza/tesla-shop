import { CardMedia } from "@mui/material";
import React, { FC } from "react";

interface Props {
  productImage: string;
  productTitle: string;
}

const ProductImages: FC<Props> = async ({ productImage, productTitle }) => {
  return (
    <CardMedia
      component="img"
      image={productImage}
      className="fadein"
      alt={productTitle}
    />
  );
};

export default ProductImages;
