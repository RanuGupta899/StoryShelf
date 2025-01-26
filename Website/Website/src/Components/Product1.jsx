import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductCategories = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  // Fetch products from server
  const fetchProduct = async () => {
    try {
      const response = await axios.get("http://localhost:3000/product/getproduct");
      setProducts(response.data.products || []); // Fallback to an empty array if products are undefined
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduct(); // Fetch products when the component mounts
  }, []);

  const handleAddToCart = (product) => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    cartItems.push(product);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
    alert(`${product.productname} added to cart!`);
  };

  const isExpanded = visibleCount >= products.length;

  const toggleVisibility = () => {
    setVisibleCount(isExpanded ? 4 : products.length);
  };

  return (
    <div className="w-full mx-auto p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-2xl font-bold text-center mb-6">Product Categories</h2>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.slice(0, visibleCount).map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 bg-white shadow hover:shadow-lg transition-shadow duration-300"
          >
            <img
              src={`http://localhost:3000/uploads/${product.productImage}`}
              alt={product.productname}
              className="w-full  object-cover rounded-t-lg"
            />
            <h3 className="text-lg font-semibold mt-2">{product.productname}</h3>
            <p className="text-gray-600 text-sm mt-1">{product.productdescription}</p>
            <p className="text-blue-500 font-bold mt-2">${product.productprice}</p>
            <button
              onClick={() => handleAddToCart(product)}
              className="mt-4 w-2/4 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      <div className="text-center mt-6">
        <button
          onClick={toggleVisibility}
          className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
        >
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
};

export default ProductCategories;
