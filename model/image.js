const mongoose = require('mongoose')

const ImageSChema = mongoose.Schema({
    

    

    image : {
        type : String,
        required : true
    }
})

module.exports = mongoose.model("ImageDetails", ImageSChema)