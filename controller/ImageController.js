const asyncHandler = require("express-async-handler");

const Image = require("../model/image");

const UploadImage = asyncHandler(  async (req, res)=>{
    const { name, category, price, mrp, quantity } = req.body
   
    

    if(!name || !price || !quantity   || !category || !mrp ){
        res.status(400)
        throw new Error("all filed all mandatory")
    }

    console.log(req.body , "added")
    console.log(req.file.filename)


    const image1 = await Image.create({
        image : req.file.filename,
        name,
        price,
        category,
        quantity,
        mrp
    })

    console.log("Added in DB")
    /*

    res.json({
        sucess:1,
        Image_url :`http://localhost:5000/images/${req.file.filename}`,
        image : image
    })
    */

    res.status(202).json(image1)

})

const GetImage = asyncHandler( async (req, res)=>{
    const image = await Image.find()
    

    
    
    res.status(200).json({Image:image})
    
})


module.exports = { UploadImage, GetImage }