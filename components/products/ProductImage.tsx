import { CardMedia } from "@mui/material";
import React, { FC } from "react";

interface Props {
  productImage: string;
  producTitle: string;
}
const ProductImage: FC<Props> = ({ productImage, producTitle }) => {
  return (
    <CardMedia
      component="img"
      image={productImage}
      className="fadein"
      alt={producTitle}
    />
  );
};

export default ProductImage;
