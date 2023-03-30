const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId, ref: "category"
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    owner: { type: mongoose.Types.ObjectId, ref: "user" },
})

const ProductModel = mongoose.model("product", productSchema)

module.exports = ProductModel