const express=require('express');

const {savecategory}=require('../controllers/categoryController');
const {getCategories}=require('../controllers/categoryController');
const {deleteCategories}=require('../controllers/categoryController');

const router=express.Router();// Save Route
router.post("/save",savecategory);
// get route
router.get("/getcategory",getCategories)
// deletion route
router.delete('/delete/:id',deleteCategories);

module.exports=router;
