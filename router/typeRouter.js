const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")

const { getTypes, createType, updateType, deleteType, getType } = require("../controller/typeController")


const router = express.Router()


//router.use(validateToken)
router.route("/").get(getTypes).post(createType)
router.route("/:id").put(updateType).get(getType).delete(deleteType)

module.exports = router