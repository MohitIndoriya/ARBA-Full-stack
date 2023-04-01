const Cart = require("../Models/cart.model");


const GETCART = async (req, res) => {
    const id = req.user.id;
    try {
        const cart = await Cart.find({ userId: id }).populate('productId')
        res.status(200).send({ data: cart });
    }
    catch (error) {
        res.status(500).send(error.message);
    }
}

const ADDTOCART = async (req, res) => {
    const id = req.user.id;

    try {
        let cartItem = await Cart.findOne({ userId: id, productId: req.body.productId });
        if (cartItem) {

            cartItem.quantity = cartItem.quantity + req.body.quantity;
            cartItem = await cartItem.save().then(() => { return cartItem.populate('productId') });
            return res.status(201).send(cartItem)
        }
        else {
            const cart = new Cart(req.body);
            cart.userId = id;
            cartItem = await cart.save().then(() => { return cart.populate('productId') });
            res.status(200).send({ message: "Cart updated successfully", cartItem });
        }
    } catch (e) {
        return res.status(404).send(e.message)
    }
}

const UPDATECART = async (req, res) => {
    const id = req.user.id;
    console.log(req.body, "itsme")
    try {
        const cart = await Cart.findOneAndUpdate({ userId: id, _id: req.params.id }, req.body, { new: true }).populate('productId');
        res.status(200).send({ data: cart });
    }
    catch (error) {
        res.status(400).send(error);
    }
}

const DELETECART = async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).send({ message: "Item deleted from cart successfully" });
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = { DELETECART, ADDTOCART, GETCART, UPDATECART }