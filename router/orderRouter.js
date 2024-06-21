const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { OrderHistory, createOrder } = require("../controller/orderController")

const router = express.Router()


router.use(validateToken)
router.route("/").post(createOrder)
router.route("/").get(OrderHistory)



module.exports = router