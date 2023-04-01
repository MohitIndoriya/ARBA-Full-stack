require("dotenv").config()
const express = require("express")
const cors = require("cors");
const userRouter = require("./Routes/user.route");
const { connect } = require("./Database/connect");
const categoryRouter = require("./Routes/category.routes");
const productRouter = require("./Routes/product.routes")
const cartRouter = require("./Routes/cart.routes")
const app = express()
app.use(cors());
app.use(express.json())

app.use("/user", userRouter)
app.use("/category", categoryRouter)
app.use("/product", productRouter)
app.use("/cart", cartRouter)
app.listen(8080, async () => {
    await connect()
    console.log("server started")
})