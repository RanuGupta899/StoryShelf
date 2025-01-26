const mongoose=require('mongoose');
const SliderSchema=new mongoose.Schema({
      slidername:{
        type:String,
        required:true,
    },
    sliderImage:{
        type:String,
    }
   
});
const Slider=mongoose.model('Slider',SliderSchema);
module.exports=Slider;