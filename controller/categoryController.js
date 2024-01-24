
const asyncHandler = require("express-async-handler");
const Category = require("../model/categoryModel")




const createCategory = asyncHandler( async (req, res)=>{
    console.log("ok")
    const { category_name } = req.body
    console.log(req.body)

    if(!category_name)
    {
        res.status(400)
        throw new Error("all filed all mandatory")
    }

    const category1 = await Category.create({
        category_name : category_name
    })
    res.status(202).json(category1)
    
   

})

const getCategory = asyncHandler( async (req, res)=>{
    const category = await Category.find()
    res.status(200).json(category)
})




module.exports = { createCategory , getCategory}
