const express = require("express")
const { CREATEPRODUCT, UPDATEPRODUCT, GETSINGLEPRODUCT, GETPRODUCTS, MYPRODUCTS, DELETEPRODUCT } = require("../Controller/product.controller")
const authMiddleware = require("../Middelware/auth")
const app = express.Router()

app.post("/addproduct/:category", authMiddleware, CREATEPRODUCT)
app.put("/update/:productid", UPDATEPRODUCT)
// app.get("/:productid", GETSINGLEPRODUCT)
app.get("/", GETPRODUCTS)
app.get("/myproduct", authMiddleware, MYPRODUCTS)
app.delete("/:id", authMiddleware, DELETEPRODUCT)
module.exports = app

