
const asyncHandler = require("express-async-handler");
const Cart = require("../model/cartModel")
const Product = require("../model/productModel")



const createCart = asyncHandler( async (req, res)=>{
    const user_id = req.user.id
    const { product_id, quantity } = req.body
   
    const cart = await Cart.findOne({user_id: user_id})
    const product = await Product.findOne({_id:product_id})
    const price = product.price;
    const name = product.name
    const image = product.image

   
    if(cart){
       
        const itemIndex = cart.ItemStore.findIndex(p=>p.product_id == product_id)
        
        if(itemIndex > -1){
           let productItem = cart.ItemStore[itemIndex];
                productItem.quantity += quantity;
        }
        else{
            cart.ItemStore.push({product_id , name , price,  quantity, image})
        }
        cart.bill += quantity*price
        await cart.save();
    }
    else{
       
        const cart = await Cart.create({
            user_id : req.user.id,
            ItemStore: [{product_id, name, price, quantity, image}],
            bill: quantity*price
        })

        
        res.status(202).json(cart)
    }
    res.status(202).json(cart)

})




const getCart = asyncHandler( async (req, res)=>{
    const cart = await Cart.findOne({ user_id: req.user.id})
    res.send(cart)
    
})


const updateCart = asyncHandler( async (req, res)=>{
   
    const user_id = req.user.id
    const product_id = req.params.id
    const {  quantity } = req.body
  
    const cart = await Cart.findOne({user_id: user_id})
    
    const product = await Product.findOne({product_id:product_id})
   

    if (cart.user_id.toString() !== user_id) {
        res.status(403);
        throw new Error("User don't have permission to delete this post");
    }
   

    if(cart){
        
        const itemIndex = cart.ItemStore.findIndex(p=>p.product_id == product_id)

        if(cart.ItemStore[itemIndex]. quantity > 1){
            
            let productItem = cart.ItemStore[itemIndex];
                productItem.quantity -= quantity;
                cart.bill -= quantity*productItem.price
                await cart.save();
                
        }else{
            
        }
       
    }
    
    res.send(cart)




    
})

const deleteCart = asyncHandler( async (req, res)=>{
    const user_id = req.user.id
    const product_id = req.params.id
    const cart = await Cart.findOne({user_id: user_id})
    const product = await Product.findOne({product_id:product_id})

    if (cart.user_id.toString() !== user_id) {
        res.status(403);
        throw new Error("User don't have permission to delete this post");
    }
    if(cart){
        const itemIndex = cart.ItemStore.findIndex(p=>p.product_id == product_id)

        const itemValue = cart.ItemStore[itemIndex].quantity * cart.ItemStore[itemIndex].price
       
        
        const arr = cart.ItemStore.splice(itemIndex, 1)
        cart.bill -= itemValue
        await cart.save()
       
       
       
    }

    
    
    res.send("All Product have removed from cart")
    
})

module.exports = { createCart, deleteCart, updateCart, getCart }
