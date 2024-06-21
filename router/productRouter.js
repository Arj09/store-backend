const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { getProducts, createProduct, deleteProduct, updateProduct, getProduct } = require("../controller/productController")
const router = express.Router()


//router.use(validateToken)
router.route("/").get(getProducts).post(createProduct)
router.route("/:id").delete(deleteProduct).put(updateProduct).get(getProduct)

module.exports = router