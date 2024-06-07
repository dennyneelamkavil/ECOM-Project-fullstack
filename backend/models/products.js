const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    serial_no: String,
    title: String,
    category: String,
    description: String,
    image: String,
    quantity: Number,
    price: Number,
  },{
    timestamps: true,
  }
);

const ProductModel = mongoose.model("Products", ProductSchema);
module.exports = ProductModel;
