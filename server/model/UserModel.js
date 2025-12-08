const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    productName: {
        type: String,
        require: [true, "Please Enter your product name"]
    },
    productURL: {
        type: String,
        require: [true, "Please Enter your product URL"]
    },
    productPrice: {
        type: Number,
        require: [true, "Please Enter your product price"]
    },
    productDescription: {
        type: String,
        require: [true, "Please Enter your product description"]
    }
}, {timestamps: true})

module.exports.Product = mongoose.model("Product", productSchema)