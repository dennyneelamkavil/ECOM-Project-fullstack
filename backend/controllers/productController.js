const ProductModel = require("../models/products");
const ProductJoi = require("../validations/productJoi");
const cloudinary = require("../utils/cloudinaryConfig");

// Add new product
exports.addProduct = async (req, res) => {
    const productDetails = req.body;
    if(req.file) {
        productDetails.image = req.file.path;
        productDetails.imagePublicId = req.file.filename;
    }
    await ProductJoi.validateAsync(productDetails);
    const product = new ProductModel(productDetails);
    console.log(product);
    await product.save();
    res.status(201).send({message: "Product added successfully"});
};

// Get all products
exports.getAllProducts = async (req, res) => {
    const allProducts = await ProductModel.find({});
    res.status(200).send({data: allProducts, message: "Products fetched successfully"});
}

// Get product by id
exports.getById = async (req, res) => {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    if(!product) {
        return res.status(404).send({message: "Product not found"});
    }
    res.status(200).send({data: product, message: "Product fetched successfully"});
}

// Delete product by id
exports.deleteProduct = async (req, res) => {
    const id = req.params.id;
    const product = await ProductModel.findByIdAndDelete(id);
    if(!product) {
        return res.status(404).send({message: "Product not found"});
    }
    if(product.imagePublicId) {
        await cloudinary.uploader.destroy(product.imagePublicId);
    }
    res.status(200).send({data: product, message: "Product deleted successfully"});
}

// Update product by id
exports.updateProduct = async (req, res) => {
    const id = req.params.id;
    const newData = req.body;
    if(req.file) {
        newData.image = req.file.path;
        newData.imagePublicId = req.file.filename;
    }
    const product = await ProductModel.findByIdAndUpdate(id, newData);
    if(!product) {
        return res.status(404).send({message: "Product not found"});
    }
    res.status(200).send({data: product, message: "Product updated successfully"});
}