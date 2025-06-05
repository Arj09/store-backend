const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { createCategory, getCategory, AddItemInCategory, getAllCategory, deleteCategory } = require("../controller/categoryController")


const router = express.Router()


//router.use(validateToken)
router.route("/").get(getAllCategory).post(createCategory)
router.route("/:id").put(AddItemInCategory).get(getCategory).delete(deleteCategory)

module.exports = router