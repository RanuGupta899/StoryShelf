const express=require('express');
const multer=require("multer");
const path=require("path");
const { saveSlider, getSliders,deleteSlider } = require('../controllers/sliderController');

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
router.post('/save',upload.single('sliderImage'),saveSlider);
// get api
router.get('/getsliders',getSliders)

// delete api
router.delete('/deleteslider/:id',deleteSlider)
module.exports=router;
