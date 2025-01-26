const User=require('../models/usermodels');
const jwt=require("jsonwebtoken");
const signupUser=async (req,res)=>{
    try{
        const {name,email,password}=req.body;
        // create a new user
        const user= new User({name,email,password});
        await user.save();
        return res.status(200).json({message:'User Signed up sucessfully',user:user});
    }
    catch(error){
        console.error('Error:', error.
            message);
        res.status(500).json({message:'Internal server error'});
    }
};

// Login Api
const loginUser=async(req,res)=>{
    try{
        const {email,password}=req.body;
        // chech if the user exist
        const user=await User.findOne({email});
        if(!user){
            return res.status(400).json({message:"User not Found"});

        }
        if(user.password!==password){
            return res.status(400).json({message:"Invalid credential"});

        }

// Gnerate Token
const token=jwt.sign(
    {userId:user._id,email:user.email},
    process.env.JWT_SECRET, 
    {expiresIn:"1h"}

)
        res.status(200).json({message:"Login Successfully",user,token});

    }
    
    catch(error){
    console.error("error during login",error)
    res.status(500).json({message:"Internal Server Error"});
    }
};

// change password
const changePassword=async(req,res)=>{
    try{
        const{email,oldPassword,newPassword}=req.body;
        const user=await User.findOne({email});
        if(!user){
            return res.status(404).json({message:"User not found"});
        }

        // verify old password
        
        if(user.password!==oldPassword){
            return res.status(400).json({message:"Enter correct old password"});
        }
        // update the password
        user.password=newPassword;
        await user.save();
res.status(200).json({message:"password updated successfully"})

       
    }
    catch(error){
        console.error("error during login ",error)
        res.status(500).json ({message:"Internal server error"})
    }
}





module.exports={signupUser,loginUser,changePassword};
