const mongoose=require('mongoose');
const ProductSchema=new mongoose.Schema({
    productname:{
        type:String,
        required:true,
    },
    productImage:{
        type:String,
        
    },
    productprice:{
        type:String,
        required:true,
    },
    productdescription:{
        type:String,
        required:true, 
    },
    productcategory:{
        type:String,
        required:true,
    },
   
});
const Product=mongoose.model('Product',ProductSchema);
module.exports=Product;