const express = require("express");
const errorHandler = require("./middleware/errorhandler");
const DBconnection = require('./dbConfig/dbConnection')
const dotenv = require("dotenv").config()
const multer = require("multer");
const cors = require('cors')


DBconnection()
const app = express()
const port = process.env.PORT || 5001


const storage = multer.diskStorage({
    destination : "upload/images",
    filename :(req, file, cb)=>{
        return cb(null, `${file.fieldname}_${Date.now()}${file.originalname}`)
    }
})

const upload = multer({storage : storage})



app.use(cors())
app.use(express.json());
app.use("/images", express.static('upload/images'))
app.use("/api/product", upload.single('product'),  require("./router/itemRouter"))

app.use("/api/cart", require("./router/cartRouter"))
app.use("/api/order", require("./router/orderRouter"))
app.use("/api/user", require('./router/userRouter'))
app.use("/api/admin", require('./router/adminRouter'))
app.use("/api/image-upload", upload.single('product') , require("./router/Image"))
app.use("/api/category", require("./router/categoryRouter"))
app.use(errorHandler);


app.listen(port, (req, res)=>{
    console.log(`server is running on port : ${port}`)

})