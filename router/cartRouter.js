const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { getCart, createCart, deleteCart, updateCart } = require("../controller/cartController")

const router = express.Router()


router.use(validateToken)
router.route("/").get(getCart).post(createCart)
router.route("/:id").delete(deleteCart).put(updateCart)

module.exports = router