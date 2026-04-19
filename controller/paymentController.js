const asyncHandler = require("express-async-handler");
const Razorpay = require("razorpay");
const User = require("../model/userModel")
const Success = require("../model/sucessPaymentModel")


const createPayment = asyncHandler( async (req, res)=>{

    
   try {

    const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_SECRET,
        });

        const options = {
            amount: req.params.id, // amount in smallest currency unit
            currency: "INR",
            receipt: "receipt_order_74394",
        };
    

    const order = await instance.orders.create(options);
    
    
    //if (!order) return res.status(500).send("Some error occured");
    res.json(order);
    } catch (error) {
        res.status(500).send(error);
    }
    
})


const SucessPayment = asyncHandler( async (req, res)=>{
   

    const { orderCreationId,razorpayPaymentId,razorpayOrderId,razorpaySignature, user_id  } = req.body
    console.log(req.body)
    
    

    if(!orderCreationId || !razorpayOrderId || !razorpayPaymentId || !razorpaySignature || !user_id ){
        res.status(400)
        throw new Error("all filed all mandatory")
    }
    

   

    const history = await Success.create({
        user_id,
        orderCreationId,
        razorpayPaymentId,
        razorpayOrderId,
        razorpaySignature
    })
    
    

    res.status(202).json(history)
})

const GetPaymentHistory = asyncHandler( async  (req, res)=>{


   
    const product = await Success.find({user_id: req.user.id})
    const product1 = product.reverse()
    
    res.status(200).json(product1)
    
})






module.exports ={ createPayment, SucessPayment, GetPaymentHistory }
