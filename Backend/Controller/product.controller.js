const { query } = require("express")
const ProductModel = require("../Models/product.model")


const CREATEPRODUCT = async (req, res) => {
    try {
        const { category } = req.params
        const owner = req.user.id
        const product = await ProductModel.create({ category, owner, ...req.body })
        return res.status(201).send(product)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const UPDATEPRODUCT = async (req, res) => {
    try {
        const { productid } = req.params
        //delete image yet to be done
        const { title, price, category, description, image } = req.body
        const update = await ProductModel.updateOne({ _id: productid }, { $set: { title, price, category, description, image } })
        return res.status(200).send(update)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const GETSINGLEPRODUCT = async (req, res) => {
    try {
        const product = await ProductModel.findOne({ _id: req.params.productid }).populate({
            path: "owner", select: { userName: 1, avatar: 1 }
        }).populate({
            path: "category",
            select: { name: 1, slug: 1, image: 1 }
        })
        return res.status(200).send(product)

    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const GETPRODUCTS = async (req, res) => {
    try {
        const Query = {}
        const Sort = {}
        const { q, sort, order, category } = req.query
        if (q) {
            Query.title = { $regex: new RegExp(q, "i") }
        }
        if (sort && order) {
            Sort.sort = order == "asc" ? 1 : -1
        }
        if (category) {
            Query.category = category
        }
        const product = await ProductModel.find(Query).sort(Sort)
        return res.status(200).send(product)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const MYPRODUCTS = async (req, res) => {
    try {
        let id = req.user.id
        const products = await ProductModel.find({ owner: id })
        return res.status(200).json(products)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const DELETEPRODUCT = async (req, res) => {
    try {
        await ProductModel.findByIdAndDelete({ _id: req.params.id })
        return res.status(201).send("product deleted")
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = { CREATEPRODUCT, UPDATEPRODUCT, GETSINGLEPRODUCT, GETPRODUCTS, MYPRODUCTS, DELETEPRODUCT }