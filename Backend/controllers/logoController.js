const Logo=require("../models/logomodels");

// save Logo
const saveLogo=async(req,res)=>{
    try{
        const{logoname}=req.body;
        const logoImage=req.file?req.file.filename:null;

    const logo=new Logo({logoname,logoImage});
    await logo.save();
    res.status(200).json({message:"Logo Saved successfully",logo});
    }catch(error){
        console.error("Error saving logo:",error);
        res.status(500).json({message:"Internal Server Error"});
    }
};

// Get Products
const getLogo=async(req,res)=>{
    try{
        const logo=await Logo.find();
        res.status(200).json({message:"Logo fetch successfully",logo});
    }catch(error){
        console.error("Error fetching logo:",error);
        res.status(500).json({message:"Internal Server Error"});
    }
};
// delete logo
const deleteLogo=async(req,res)=>{
    try{
        const{id}=req.params;
        const deleteLogo=await Logo.findByIdAndDelete(id);
        if(!deleteLogo){
            return res.status(404).json({message:"Logo not found"});

        }
        res.status(200).json({message:"Logo deleted successfully",logo:deleteLogo});
    }catch(error){
        console.error("Error deleting logo:",error);
        res.status(500).json({message:"Error deleting logo"});
    }
};

module.exports={saveLogo,getLogo,deleteLogo};