const express = require("express");
const { CREATECATEGORY, UPDATECATEGORY, GETALLCATEGORY, GETCATEGORYBYID, DELETECATEGORY } = require("../Controller/category.controller");
const categoryRouter = express.Router();
let authMiddleware = require("../Middelware/auth")

categoryRouter.post("/create", authMiddleware, CREATECATEGORY)
categoryRouter.put("/update/:id", authMiddleware, UPDATECATEGORY),
    categoryRouter.get("/", authMiddleware, GETALLCATEGORY)
categoryRouter.get("/:id", authMiddleware, GETCATEGORYBYID)
categoryRouter.delete("/:id", authMiddleware, DELETECATEGORY)

module.exports = categoryRouter