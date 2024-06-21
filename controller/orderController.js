const asyncHandler = require("express-async-handler");
const Cart = require("../model/cartModel")
const Order = require("../model/orderModel")




const createOrder = asyncHandler( async (req, res)=>{

    const { cart_id } = req.body // Cart ID
    console.log(req.body)
    const cart = await Cart.findById({_id: cart_id})
    

    if(!cart){
        res.status(404);
        throw new Error('Cart is empty');

    }
    
    const order = await Order.create({
        user_id : req.user.id,
        ItemStore: cart.ItemStore,
        bill: cart.bill
    
    })
    await Cart.deleteOne({ _id: cart_id });
    
    res.status(202).json(order)
    

})


const OrderHistory = asyncHandler( async (req, res)=>{

    const order = await Order.find({user_id : req.user.id})
    

    res.status(200).json(order)
})







module.exports = {createOrder, OrderHistory }