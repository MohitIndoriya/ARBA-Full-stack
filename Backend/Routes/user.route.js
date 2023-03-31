const express = require("express")
const userRouter = express.Router();
const { SIGNUP, LOGIN, UPDATEPROFILE } = require("../Controller/user.controller");
const authMiddleware = require("../Middelware/auth");


userRouter.post("/signup", SIGNUP)
userRouter.post("/login", LOGIN)
userRouter.patch("/:userid", authMiddleware, UPDATEPROFILE)
module.exports = userRouter