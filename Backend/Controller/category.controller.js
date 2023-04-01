const Category = require("../Models/category.model")

const CREATECATEGORY = async (req, res) => {
    const { name, slug, image } = req.body
    try {

        let { id } = req.user
        console.log(req.user.id)
        let category = await Category.create({ name, slug, image, owner: id })
        res.status(201).send({ id: category._id })
    } catch (error) {
        res.status(400).send(error)
    }

}
let UPDATECATEGORY = async (req, res) => {
    let { id } = req.params
    try {

        console.log(id);
        let { name, slug, image } = req.body

        let update = await Category.updateOne({ _id: id }, { $set: { ...req.body } })
        return res.status(201).send(update)
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
let GETALLCATEGORY = async (req, res) => {
    try {

        let category = await Category.find()
        res.status(201).send(category)
    } catch (error) {
        res.status(400).send(error)
    }
}
let GETCATEGORYBYID = async (req, res) => {
    let { id } = req.params
    try {

        let category = await Category.findOne({ _id: id })
        res.status(201).send(category)
    } catch (error) {
        res.status(400).send(error)
    }
}

module.exports = {
    CREATECATEGORY,
    UPDATECATEGORY,
    GETALLCATEGORY,
    GETCATEGORYBYID
}