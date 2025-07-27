
const asyncHandler = require("express-async-handler");
const Category = require("../model/categoryModel");





const createCategory = asyncHandler( async (req, res)=>{
    
    const { category_name, category_item } = req.body
    

    if(!category_name )
    {
        res.status(400)
        throw new Error("all filed all mandatory")
    }

    const category1 = await Category.create({
        category_name,
        category_item

       
    })
    res.status(202).json(category1)
    
   
})



const AddItemInCategory = asyncHandler( async (req, res)=>{
   
    const { item_name } = req.body

    
    

    if(!item_name)
    {
        res.status(400)
        throw new Error("all filed all mandatory")
    }

    const category = await Category.findOne({_id : req.params.id})

    if(!category){
        res.status(403);
        throw new Error(" Category is not listed ");

    }

    category.category_item.push({item_name})
    await category.save()


   
    


    
    res.status(202).json( category)
    
   
})




const getCategory = asyncHandler( async (req, res)=>{
    
    const category = await Category.findById(req.params.id);

    if(!category){
        res.status(404);
        throw new Error('Category not found');
    }
    
    res.status(200).json(category)
})


const getAllCategory = asyncHandler( async (req, res)=>{
    const category = await Category.find()
    res.status(200).json(category)
})


const deleteCategory = asyncHandler ( async  (req, res)=>{

    const category = await Category.findById(req.params.id); 
    //const admin = await Admin.findById(req.user.id);
    
    /*
    if(!admin){
        res.status(403);
        throw new Error("User don't have permission to delete this  product");
    }
    */
    if(!category){
        res.status(404);
        throw new Error('category not found');
    }
    
    await Category.deleteOne({ _id: req.params.id });
    res.status(200).json(category);
} )





module.exports = { createCategory , getCategory, AddItemInCategory, getAllCategory, deleteCategory}
