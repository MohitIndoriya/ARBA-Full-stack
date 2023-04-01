const express = require("express")
const { GETCART, ADDTOCART, UPDATECART, DELETECART } = require("../Controller/cart.controller")
const authMiddleware = require("../Middelware/auth")
const app = express.Router()

app.get("/", authMiddleware, GETCART)
app.post("/", authMiddleware, ADDTOCART)
app.put("/:id", authMiddleware, UPDATECART)
app.delete("/:id", authMiddleware, DELETECART)



module.exports = app