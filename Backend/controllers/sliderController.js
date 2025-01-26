const Slider=require("../models/slidermodels");
const saveSlider=async(req,res)=>{
    try{
        const {slidername}=req.body;
        const sliderImage=req.file?req.file.filename:null;
        const slider=new Slider({slidername,sliderImage});
        await slider.save();
        res.status(200).json({message:"Slider Save Successfully",slider})
    }
    catch(error){
        console.error("Error Saving SLider");
        res.status(500).json({message:"Internal Server Error"});

    }
};
// get slider
const getSliders=async(req,res)=>{
    try{
const sliders=await Slider.find();
res.status(200).json({message:"Slider fetched successfully",sliders})
    }
    catch(error){
        console.error("Error Saving SLider");
        res.status(500).json({message:"Internal Server Error"});
    }
};
// delete Slider
const deleteSlider=async(req,res)=>{
    try{
    const{id}=req.params;
    // Find user by id and delete
    const deletedslider=await Slider.findByIdAndDelete(id);
    if(!deletedslider){
        return res.status(400).json({message:'Slider not found'});
    }
    res.status(200).json({message:"Slider Deleted successfully",slider:deletedslider});
}
catch(error){
    console.error('Error deleting slider',error);
    res.status(500).json({message:"Error Deleting Slider"});
}
};



module.exports={saveSlider,getSliders,deleteSlider};

// Json Web Token
// Authentication,Authorization
// Navigation
// third Party
// session and Token
// web Socket 
