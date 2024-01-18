const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { registerAdmin, loginAdmin, currentAdmin } = require("../controller/adminController")

const router = express.Router()

router.post("/register", registerAdmin)
router.post("/login", loginAdmin)
router.get("/current", validateToken, currentAdmin)

module.exports = router