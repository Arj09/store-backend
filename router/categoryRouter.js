const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { createCategory, getCategory } = require("../controller/categoryController")


const router = express.Router()


//router.use(validateToken)
router.route("/").get(getCategory).post(createCategory)
//router.route("/:id").delete().put()

module.exports = router