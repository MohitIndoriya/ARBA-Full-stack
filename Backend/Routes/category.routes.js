const express = require("express");
const { CREATECATEGORY, UPDATECATEGORY, GETALLCATEGORY, GETCATEGORYBYID } = require("../Controller/category.controller");
const categoryRouter = express.Router();
let authMiddleware = require("../Middelware/auth")

categoryRouter.post("/create", authMiddleware, CREATECATEGORY)
categoryRouter.patch("/update/:id", authMiddleware, UPDATECATEGORY),
    categoryRouter.get("/", authMiddleware, GETALLCATEGORY)
categoryRouter.get("/:id", authMiddleware, GETCATEGORYBYID)

module.exports = categoryRouter