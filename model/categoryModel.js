const mongoose = require('mongoose')

const categorySChema = mongoose.Schema({

    category_name : {
        type : String,
        required : [true, "Please add category"]
    },

    category_item : [
        {
            item_name : {required: [true, "Please add Product name"], type : String}
        }
    ]



    
 
},{
    timestamps : true
})

module.exports = mongoose.model("category", categorySChema)