const express  = require("express")
const { registerUser, loginUser, currentUser, Alluser } = require("../controller/userController")
const validateToken = require("../middleware/validationtokenHandler")

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/current", validateToken, currentUser)
router.get("/allUser", Alluser)

module.exports = router