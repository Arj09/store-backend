const mongoose = require('mongoose')

const productSchema = mongoose.Schema({

    
    name:{
        required: [true, "Please add Product name"],
        type : String
    },
    
    image : {
        type: String,
        required:[true, "please add image"]

     } ,
    price : {
        type: Number,
        required:[true, "please add price"]
    },

    category : {
        type : String,
        required : [true, "Please add Category"]
    },
    subcategory : {
        type : String,
        required : [true, "Please add SubCategory"]
    },

    quantity:{
        required: [true, "Please add Product quantity"],
        type : String
    },
    mrp:{
        required: [true, "Please add Product MRP"],
        type : Number
    },
    


},{
    timestamps : true
})

module.exports = mongoose.model("product", productSchema)