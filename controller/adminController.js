const Admin = require("../model/adminModel")
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');

const jwt = require("jsonwebtoken")

const loginAdmin = asyncHandler( async (req, res)=>{
    const { email, password } = req.body;
  
    if(!email || !password){
        
        res.status(400)
        throw new Error("all filed all mandatory")

    }
    const admin = await Admin.findOne({email});
    
    if( admin && (await bcrypt.compare(password, admin.password))) {
       
        const accessToken = jwt.sign(
            {
                admin: {
                    username: admin.username,
                    email: admin.email,
                    id: admin.id,
                },
            },
            process.env.ACCESS_TOKEN,
            { expiresIn: "60m"}
        );
        
        res.json({accessToken})
    }else {
        res.status(400).json({message:"username or password is  not valid"})
    }
   
    
    
    
}
)




const registerAdmin = asyncHandler( async (req, res)=>{
    const {username , email, password} = req.body;

    if(!username || !email || !password){
        res.status(400)
        throw new Error("all filed all mandatory")
        
    }
    const adminAvailable = await Admin.findOne({email});
    if(adminAvailable) {
        res.status(400)
        throw new Error("Admin already register")
        
    }
    //hasing password
    const hashedPassword = await bcrypt.hash(password, 10);
    const admin = await Admin.create({
        username,
        email,
        password:hashedPassword,
    })

    console.log(`user created ${admin}`)
    if(admin){
        res.status(201).json({_id: admin.id, email: admin.email})
    }else{
        res.status(400);
        throw new Error("admin not created")
    } 


    res.status(204).json({message:"admin has been create "})
})




const currentAdmin = asyncHandler(async(req, res)=>{
    res.json(req.user);

} );

module.exports = {registerAdmin, loginAdmin,currentAdmin}