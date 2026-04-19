const mongoose = require('mongoose')

const typeSchema = mongoose.Schema({

    
    name:{
        required: [true, "Please add Product name"],
        type : String
    },
    
   

    category_id : {
        type : String,
        required : [true, "Please add Category ID"]
    },
    
    


},{
    timestamps : true
})

module.exports = mongoose.model("type", typeSchema)