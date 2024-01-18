const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

   
    name:{
        required: [true, "Please add Product name"],
        type : String
    },
    price : {
        type: Number,
        required:[true, "please add price"]
    },
    quantity:{
        required: [true, "Please add Product name"],
        type : Number
    },



},{
    timestamps : true
})

module.exports = mongoose.model("product", productSchema)