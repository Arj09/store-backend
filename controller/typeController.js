const asyncHandler = require("express-async-handler");
const Type = require("../model/typeModel")

const User = require("../model/userModel")


const createType = asyncHandler( async (req, res)=>{
   

    const { name, category} = req.body
   
    if(!name || !category  ){
        res.status(400)
        throw new Error("all filed all mandatory")
    }
    
    const product = await Type.create({
        name,
        category
    })
   
    res.status(202).json(product)
})


const getTypes = asyncHandler( async  (req, res)=>{
    
    const type = await Type.find()
    const type1 = type.reverse()
    
    res.status(200).json(type1)
    
})


const getType = asyncHandler( async (req, res)=>{

    const type = await Type.findById(req.params.id);

    if(!type){
        res.status(404);
        throw new Error('type not found');
    }

    
    res.status(200).json(type);
})
const updateType = asyncHandler(async (req, res)=>{
    
    const type = await Type.findById(req.params.id);
    
  
   
    if(!type){
        res.status(404);
        throw new Error('type not found');
    }

    
      
      
      const updateType = await Type.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
            new: true
        }
    )

    
    res.status(200).json(updateType);
    
})
const deleteType = asyncHandler ( async  (req, res)=>{

    const type = await Type.findById(req.params.id); 
    //const admin = await Admin.findById(req.user.id);
    
    /*
    if(!admin){
        res.status(403);
        throw new Error("User don't have permission to delete this  product");
    }
    */
    if(!type){
        res.status(404);
        throw new Error('type not found');
    }
    
    await Type.deleteOne({ _id: req.params.id });
    res.status(200).json(type);
} )



module.exports ={createType,deleteType,updateType, getType, getTypes}
