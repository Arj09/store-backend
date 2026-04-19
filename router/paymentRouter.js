const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { createPayment, SucessPayment, GetPaymentHistory } = require("../controller/paymentController")

const router = express.Router()


//router.use(validateToken)
router.route("/:id").post(createPayment)
router.route("/success").post(SucessPayment).get(validateToken, GetPaymentHistory)
//router.route("/:id").delete(deleteProduct).put(updateProduct).get(getProduct)

module.exports = router