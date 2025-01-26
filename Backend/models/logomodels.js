const mongoose=require('mongoose');
const LogoSchema=new mongoose.Schema({
    logoname:{
        type:String,
        required:true,
    },
    logoImage:{
        type:String,
        required:true,
    },
});
const Logo=mongoose.model('Logo',LogoSchema);
module.exports=Logo;