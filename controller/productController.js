const asyncHandler = require("express-async-handler");
const Product = require("../model/productModel")
const Admin = require("../model/adminModel")
const User = require("../model/userModel")


const createProduct = asyncHandler( async (req, res)=>{
   

    const { name, price, category, quantity, mrp, subcategory} = req.body
    console.log(req.body)
    //console.log(req.file.filename)
    

    if(!name || !price || !quantity || !mrp || !category || !subcategory ){
        res.status(400)
        throw new Error("all filed all mandatory")
    }
    

   console.log(req.body)
    const product = await Product.create({
        image : req.file.filename ,
        name ,
        price,
        quantity,
        category,
        mrp,
        subcategory
        
        

    })
    console.log("add")

    res.status(202).json(product)
})


const getProducts = asyncHandler( async  (req, res)=>{


   
    const product = await Product.find()
    const product1 = product.reverse()
    
    res.status(200).json(product1)
    
})


const getProduct = asyncHandler( async (req, res)=>{

    const product = await Product.findById(req.params.id);

    if(!product){
        res.status(404);
        throw new Error('product not found');
    }

    
    res.status(200).json(product);
})
const updateProduct = asyncHandler(async (req, res)=>{
    
    const product = await Product.findById(req.params.id);
    
  
   
    if(!product){
        res.status(404);
        throw new Error('product not found');
    }

    
      
      
      const updateProduct = await Product.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )

    
    res.status(200).json(updateProduct);
    
})
const deleteProduct = asyncHandler ( async  (req, res)=>{

    const product = await Product.findById(req.params.id); 
    //const admin = await Admin.findById(req.user.id);
    
    /*
    if(!admin){
        res.status(403);
        throw new Error("User don't have permission to delete this  product");
    }
    */
    if(!product){
        res.status(404);
        throw new Error('product not found');
    }
    
    await Product.deleteOne({ _id: req.params.id });
    res.status(200).json(product);
} )



module.exports ={createProduct, getProduct, getProducts, updateProduct, deleteProduct}
