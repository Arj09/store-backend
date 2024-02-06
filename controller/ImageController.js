const asyncHandler = require("express-async-handler");

const Image = require("../model/image");

const UploadImage = asyncHandler(  async (req, res)=>{
    console.log(req.file)
    console.log(req.body)


    const image = await Image.create({
        image : req.file.filename,
        name : req.body.name,
        price : req.body.price,
        category : req.body.category,
        quantity : req.body.quantity
    })

    console.log(image)

    res.json({
        sucess:1,
        Image_url :`http://localhost:5000/images/${req.file.filename}`,
        image : image
    })

})

const GetImage = asyncHandler( async (req, res)=>{
    const image = await Image.find()
    

    
    
    res.status(200).json({Image:image})
    
})


module.exports = { UploadImage, GetImage }