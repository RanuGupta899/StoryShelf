const express=require('express');
const multer=require("multer");
const path=require("path");
const { saveProduct, getProduct,deleteProduct ,editProduct} = require('../controllers/productControllers');

 // configure multer
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname);
    }
}
);
const upload=multer({storage:storage});
const router=express.Router();
// save slider
router.post('/save',upload.single('productImage'),saveProduct);
// get api
router.get('/getproduct',getProduct)

// edit Api
router.put('/editproduct/:id',editProduct)

// delete api
router.delete('/deleteproduct/:id',deleteProduct)
module.exports=router;
