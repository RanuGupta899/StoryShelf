const express=require('express');
const {signupUser}=require('../controllers/userController');
const {loginUser}=require('../controllers/userController');
const {changePassword}=require('../controllers/userController')
const router=express.Router();
// Signup Route
router.post('/signup',signupUser);
router.post('/login',loginUser);
router.post('/changePassword',changePassword);
module.exports=router;
