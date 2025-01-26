const Product = require("../models/productmodels");

// Save Product
const saveProduct = async (req, res) => {
    try {
        const { productname, productprice, productdescription, productcategory } = req.body;
        const productImage = req.file ? req.file.filename : null;

        if (!productname || !productprice || !productdescription || !productcategory) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const product = new Product({ productname, productImage, productprice, productdescription, productcategory });
        await product.save();

        res.status(200).json({ message: "Product saved successfully", product });
    } catch (error) {
        console.error("Error saving product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Get Products
const getProduct = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({ message: "Products fetched successfully", products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Edit Product
const editProduct = async (req, res) => {
    try {
        const { id } = req.params;
        const { productname, productprice, productdescription, productcategory } = req.body;
        const productImage = req.file ? req.file.filename : null;
    
        // Find the product and update it
        const updatedProduct = await Product.findByIdAndUpdate(
          id,
          {
            productname,
            productprice,
            productdescription,
            productcategory,
            ...(productImage && { productImage }), // Only update image if new one is provided
          },
          { new: true, runValidators: true }
        );
        if (!updatedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product updated successfully", product: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

// Delete Product
const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedProduct = await Product.findByIdAndDelete(id);
        if (!deletedProduct) {
            return res.status(404).json({ message: "Product not found" });
        }

        res.status(200).json({ message: "Product deleted successfully", product: deletedProduct });
    } catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ message: "Error deleting product" });
    }
};

module.exports = { saveProduct, getProduct, deleteProduct,editProduct };
