const express  = require("express")
const { registerUser, loginUser, currentUser, Alluser, EditUserDetails, profile } = require("../controller/userController")
const validateToken = require("../middleware/validationtokenHandler")

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)
router.get("/current", validateToken, currentUser)
router.get("/allUser", Alluser)
router.put("/profile", validateToken, EditUserDetails)
router.get("/profile", validateToken,  profile)

module.exports = router