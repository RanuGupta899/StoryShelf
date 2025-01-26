const express=require('express');
const multer=require("multer");
const path=require("path");
const {saveLogo,getLogo,deleteLogo}=require('../controllers/logoController');

// configure multer
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'uploads/');
    },
    filename:(req,file,cb)=>{
        cb(null,Date.now()+'_'+file.originalname);
    }
});
const upload=multer({storage:storage});
const router=express.Router();
// save logo
router.post('/save',upload.single('logoImage'),saveLogo);
// get Api
router.get('/getlogo',getLogo)

// edit Api
// router.put('/editlogo/:id',editLogo)

// delete api
router.delete('/deletelogo/:id',deleteLogo)
module.exports=router;