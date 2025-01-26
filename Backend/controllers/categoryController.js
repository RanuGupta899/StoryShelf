const Category=require('../models/categorymodels');

const savecategory=async (req,res)=>{
    try{
        const {categoryname}=req.body;

        // create a new user
        const category= new Category({categoryname});
        await category.save();
        return res.status(200).json({message:'Category Saved sucessfully',category:Category});
    }
    catch(error){
console.error('Error');
res.status(500).json({message:'Internal server error'});
    }
};

// get category APi
const getCategories=async(req,res) => {
    try{
const categories=await Category.find();
res.status(200).json({message:"Categories Fetch Successfully",categories});
    }
    catch(error){
console.error("Error Fetching data",error);
res.status(500).json({message:"Intervel Server Error"});
    }
};

// delete Api
const deleteCategories = async (req, res) => {
    try {
        const { id } = req.params;
        // Find user by id and delete
        const deletedcategories = await Category.findByIdAndDelete(id);
        if (!deletedcategories) {
            return res.status(400).json({ message: 'Categories Not Found' });
        }
        res.status(200).json({ message: 'Categories deleted Successfully', categories: deletedcategories });
    } catch (error) {
        console.error('Error deleting categories', error);
        res.status(500).json({ message: 'Error Deleting categories' });
    }
};





module.exports={savecategory,getCategories,deleteCategories};
