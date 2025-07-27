const { type } = require('express/lib/response')
const mongoose = require('mongoose')

const categorySChema = mongoose.Schema({

    category_name : {
        type : String,
        required : [true, "Please add category"]
    },
    category_item : [
        {
            item_name : { type :String, required : [true, "please add"]}
        }
    ]

   



    
 
},{
    timestamps : true
})

module.exports = mongoose.model("category", categorySChema)