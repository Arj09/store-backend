const User = require("../model/userModel")
const asyncHandler = require("express-async-handler");
const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken")






const loginUser = asyncHandler( async (req, res)=>{
    const { email, password } = req.body;
  
    if(!email || !password){
        
        res.status(400)
        throw new Error("all filed all mandatory")

    }
    const user = await User.findOne({email});
    
    if( user && (await bcrypt.compare(password, user.password))) {
        console.log("true")
        const accessToken = jwt.sign(
            {
                user: {
                    username: user.username,
                    email: user.email,
                    id: user.id,
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


const registerUser = asyncHandler( async (req, res)=>{
    const {username , email, password} = req.body;

    if(!username || !email || !password){
        res.status(400)
        throw new Error("all filed all mandatory")
        
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable) {
        res.status(400)
        throw new Error("user already register")
        
    }
    //hasing password
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        username,
        email,
        password:hashedPassword,
        mobile_no :" ",
        pin_no:" ",

    })

    console.log(`user created ${user}`)
    if(user){
        res.status(201).json({_id: user.id, email: user.email})
    }else{
        res.status(400);
        throw new Error("user not created")
    } 


    res.status(204).json({message:"user has been create "})
})




const currentUser = asyncHandler(async(req, res)=>{
    res.json(req.user);

} );

const Alluser = asyncHandler (async (req, res)=>{
    
    const user = await User.find().populate("username")
    
    res.json(user)

})

// edit details
const EditUserDetails = asyncHandler (async(req, res)=>{
    
    const user = await User.findOne({_id: req.user.id});

    console.log("something print", req.body)

  
    
    
    if(!user){
        res.status(403);
        throw new Error("User don't have permission to edit any detail");

    }

    const EditUserDetail = await User.findByIdAndUpdate(
        req.user.id,
        req.body,
        {
            new: true
        }
    )

   

    res.status(200).json(EditUserDetail); 
    

})



const profile = asyncHandler (async (req, res)=>{

    const user = await User.find({_id : req.user.id})

    console.log(req.user)
    
    res.json(user[0])

})


module.exports = {registerUser, loginUser,currentUser,Alluser, EditUserDetails, profile}