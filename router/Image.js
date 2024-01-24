const express  = require("express")

const validateToken = require("../middleware/validationtokenHandler")
const { UploadImage, GetImage } = require("../controller/ImageController")


const router = express.Router()



router.route("/").post(UploadImage).get(GetImage)




module.exports = router