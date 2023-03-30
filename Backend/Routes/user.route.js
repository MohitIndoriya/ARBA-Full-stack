const express = require("express")
const userRouter = express.Router();
const { SIGNUP, LOGIN, UPDATEPROFILE } = require("../Controller/user.controller")


userRouter.post("/signup", SIGNUP)
userRouter.post("/login", LOGIN)
userRouter.patch("/:userid", UPDATEPROFILE)
module.exports = userRouter