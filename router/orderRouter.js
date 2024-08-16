const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { OrderHistory, createOrder, GetOrderAll, updateOrderDetail } = require("../controller/orderController")

const router = express.Router()


router.use(validateToken)
router.route("/").post(createOrder)
router.route("/").get(OrderHistory)
router.route("/allOrder").get(GetOrderAll)
router.route("/update/:id").put(updateOrderDetail)



module.exports = router