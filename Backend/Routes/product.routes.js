const express = require("express")
const { CREATEPRODUCT, UPDATEPRODUCT, GETSINGLEPRODUCT, GETPRODUCTS, MYPRODUCTS } = require("../Controller/product.controller")
const authMiddleware = require("../Middelware/auth")
const app = express.Router()

app.post("/addproduct/:category", authMiddleware, CREATEPRODUCT)
app.patch("/update/:productid", UPDATEPRODUCT)
app.get("/:productid", GETSINGLEPRODUCT)
app.get("/", GETPRODUCTS)
app.get("/my/:id", MYPRODUCTS)
module.exports = app

