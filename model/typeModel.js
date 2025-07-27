const mongoose = require('mongoose')

const typeSchema = mongoose.Schema({

    
    name:{
        required: [true, "Please add Product name"],
        type : String
    },
    
   

    category : {
        type : String,
        required : [true, "Please add Category"]
    },
    
    


},{
    timestamps : true
})

module.exports = mongoose.model("type", typeSchema)