const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    category: String,
    description: String,
    image: String,
    quantity: Number,
    price: Number,
  },
  {
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Products", ProductSchema);
module.exports = ProductModel;
