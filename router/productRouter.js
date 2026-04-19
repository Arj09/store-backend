const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { getProducts, createProduct, deleteProduct, updateProduct, getProduct, unProducts } = require("../controller/productController")
const router = express.Router()


//router.use(validateToken)
//router.route("/getdata").get(getProducts).post(createProduct)

router.route("/:id").delete(deleteProduct).put(updateProduct).get(getProduct)

module.exports = router