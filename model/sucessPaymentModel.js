const mongoose = require('mongoose')

const PaymentSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User",
    },
    orderCreationId:{
        required: [true, "Please add Product name"],
        type : String
    },
    
    razorpayPaymentId : {
        type: String,
        required:[true, "please add image"]

     } ,
    razorpayOrderId : {
        type: String,
        required:[true, "please add price"]
    },

    razorpaySignature : {
        type : String,
        required : [true, "Please add Category"]
    },
   
    


},{
    timestamps : true
})

module.exports = mongoose.model("SucessPayment", PaymentSchema)