const mongoose = require('mongoose')

const categorySChema = mongoose.Schema({

    category_name : {
        type : String,
        required : [true, "Please add category"]
    }


    
 
},{
    timestamps : true
})

module.exports = mongoose.model("category", categorySChema)