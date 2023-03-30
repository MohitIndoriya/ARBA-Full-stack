require("dotenv").config()
const express = require("express")
const cors = require("cors");
const userRouter = require("./Routes/user.route");
const { connect } = require("./Database/connect");
const app = express()
app.use(cors());
app.use(express.json())

app.use("/user", userRouter)
app.listen(8080, async () => {
    await connect()
    console.log("server started")
})