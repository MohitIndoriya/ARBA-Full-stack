const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'product' },
    quantity: { type: Number, default: 1 },
});

const Cart = mongoose.model('cart', cartSchema);
module.exports = Cart;