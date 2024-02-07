const mongoose = require('mongoose')

const ImageSChema = mongoose.Schema({
    
    
    image : {
        type : String,
        required : true
    },
    name : {
        type: String,
        required : true
    },
    price :{
        type: Number,
        required : true
    },

    mrp :{
        type: Number,
        required : true
    },
    category : {
        type : String,
        required: true
    },
    quantity :{
        type : Number,
        required : true
    }
    
},{
    timestamps : true
})

module.exports = mongoose.model("ImageDetails", ImageSChema)