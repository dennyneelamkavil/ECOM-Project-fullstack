const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
    {
        title:String,
        category:String,
        description:String,
        image:String,
        quantity:Number,
        price:Number,
    }
    );

module.exports = mongoose.model('Products',productSchema)