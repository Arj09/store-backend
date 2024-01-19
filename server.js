const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const DBconnection = require('./dbConfig/dbConnection')
const dotenv = require("dotenv").config()
const cors = require('cors')


DBconnection()
const app = express()
const port = process.env.PORT || 5001


app.use(cors())
app.use(express.json());
app.use("/api/product", require("./router/itemRouter"))
app.use("/api/cart", require("./router/cartRouter"))
app.use("/api/order", require("./router/orderRouter"))
app.use("/api/user", require('./router/userRouter'))
app.use("/api/admin", require('./router/adminRouter'))
app.use(errorHandler);


app.listen(port, (req, res)=>{
    console.log(`server is running on port : ${port}`)

})