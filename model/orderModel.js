const mongoose = require('mongoose')

const orderSChema = mongoose.Schema({


    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },

    ItemStore :[
        {
            product_id : { type: mongoose.Schema.Types.ObjectId, required: true,  },
            name: {type: String},
            quantity: { type: Number, default : 1},
            price: { type: Number}

        }
    ],
    bill: {
        type: Number,
        required: true,
        default: 0
    },
    order_date: {
        type: Date,
        default: Date.now
    }
 
},{
    timestamps : true
})

module.exports = mongoose.model("Order", orderSChema)