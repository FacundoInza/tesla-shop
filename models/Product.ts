import { IProduct } from "@/interfaces";
import mongoose, { Schema, Model, model } from "mongoose";

const productSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    images: {
      type: [String],
      required: true,
    },
    inStock: {
      type: Number,
      required: true,
      default: 0,
    },
    price: {
      type: Number,
      required: true,
      default: 0,
    },
    sizes: {
      type: [String],
      enum: {
        values: ["XS", "S", "M", "L", "XL", "XXL"],
        message: "Invalid size : {VALUE}",
      },
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    type: {
      type: String,
      enum: {
        values: [
          "shirts",
          "polo",
          "sweat",
          "hoodies",
          "jacket",
          "pants",
          "shorts",
          "shoes",
          "hats",
          "accessories",
        ],
        message: "Invalid type : {VALUE}",
      },
    },
    tags: {
      type: [String],
    },
    title: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: {
        values: ["men", "women", "kid", "unisex"],
        message: "Invalid gender : {VALUE}",
      },
    },
  },
  { timestamps: true }
);

productSchema.index({ title: "text", tags: "text" });

const Product: Model<IProduct> =
  mongoose.models.Product || model("Product", productSchema);

export default Product;
