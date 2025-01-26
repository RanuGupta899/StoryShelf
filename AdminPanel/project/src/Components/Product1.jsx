import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./common.css";
 
function Slider() {
  const [showModal, setShowModal] = useState(false);
  const[categories,setCategories]=useState([]);
  const [editMode, setEditMode] = useState(false);
  const [currentproductId, setCurrentproductId] = useState(null);

  const [products, setProducts] = useState([]); // Ensure products is initialized as an empty array
  const [formData, setFormData] = useState({
    productname: "",
    productImage: null,
    productprice:"",
    productdescription:"",
    productcategory:"",
  });

  const fetchProduct = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/product/getproduct"
      );
      setProducts(response.data.products || []); // Fallback to an empty array if products are undefined
      console.log(response);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch products", "error");
    }
  };


    // call and get api
    const fetchCategories = async () => {
        try {
          const response = await axios.get("http://localhost:3000/category/getcategory");
          setCategories(response.data.categories); // use the correct state setter
        } catch (error) {
          Swal.fire("Error", "Failed to fetch Categories", "error");
        }
      };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, productImage: e.target.files[0] });
  };

  const handleAddProduct = async () => {
 // console.log(formdata);
//  const Api=editMode?`http://localhost:3000/product/editproduct/${currentproductId}`
//  :`http://localhost:3000/product/save`;
//  const apiMethod=editMode ?'put':'post';


    const formDataToSend = new FormData();
    formDataToSend.append("productname", formData.productname);
    formDataToSend.append("productImage", formData.productImage);
    formDataToSend.append("productprice", formData.productprice);
    formDataToSend.append("productdescription", formData.productdescription);
    formDataToSend.append("productcategory", formData.productcategory);

    try {
  //  const response=await axios[apiMethod](Api,formDataToSend);
  //  fetchProduct();

  if(editMode){
    const res=await axios.put(`http://localhost:3000/product/editproduct/${currentproductId}`, formDataToSend, {
      headers: { "Content-Type": "multipart/form-data" },})
    console.log("response is : ", res)
  }
  
     const response= await axios.post("http://localhost:3000/product/save", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setProducts(response.formDataToSend);

      Swal.fire("Success", "Product edited successfully!", "success");
      setShowModal(false);
      setEditMode(false);
      setCurrentproductId(null);
      setFormData({
        productname: "",
        productImage: null,
        productprice:"",
        productdescription:"",
        productcategory:"",
      });
      fetchProduct();
    } catch (error) {
      Swal.fire("Error", `Failed to ${editMode ? "update" : "add"} product`, "error");
    }
  };

  useEffect(() => {
    fetchProduct();
    fetchCategories();

  }, []);


  // Edited Part
  const handleEdit =async (product) =>{
    console.log("button clicked")
    const formDataToSend = new FormData();
    formDataToSend.append("productname", formData.productname);
    formDataToSend.append("productImage", formData.productImage);
    formDataToSend.append("productprice", formData.productprice);
    formDataToSend.append("productdescription", formData.productdescription);
    formDataToSend.append("productcategory", formData.productcategory);
    setEditMode(true);

    setFormData({
      productname: product.productname,
      productImage: null,
      productprice:product.productprice,
      productdescription:product.productdescription,
      productcategory:product.productcategory,
    });
    setShowModal(true);
    setCurrentproductId(product._id);
  };
 

  const handleDelete = async (Id) => {
    const result = await Swal.fire({
      title: "Are you Sure?",
      text: "Once deleted, you will not be able to recover this product!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(
          `http://localhost:3000/product/deleteproduct/${Id}`
        );
        Swal.fire("Deleted", "Product has been deleted", "success");
        fetchProduct();
      } catch (error) {
        Swal.fire("Failed", "Failed to delete data", "error");
        console.error(error);
      }
    } else {
      Swal.fire("Canceled", "Your data is safe", "info");
    }
  };

  return (
    <div className="users-container">
      <div className="top-bar">
        <input className="search-box" type="text" placeholder="Search..." />
        <button className="add-use-btn" 
        onClick={() => {
          setFormData({
            productname: "",
            productImage: null,
            productprice:"",
            productdescription:"",
            productcategory:"",
          });
          setEditMode(false);
          setShowModal(true);

        }}
        >
          Add Product
        </button>
      </div>

      <table className="user-table">
        <thead>
          <tr>
            <th>ProductName</th>
            <th>ProductImage</th>
            <th>ProductPrice</th>
            <th>ProductDescription</th>
            <th>ProductCategory</th>
            <th colSpan={2}>Action</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(products) && products.length > 0 ? (
            products.map((product) => (
              <tr key={product._id}>
                <td>{product.productname}</td>
                <td>
                  <img
                    src={`http://localhost:3000/uploads/${product.productImage}`}
                    alt={product.productname}
                    style={{ width: "100%", height: "100%" ,objectFit:"cover"}}
                  />
                </td>
                <td>{product.productprice}</td>
                <td>{product.productdescription}</td>
                <td>{product.productcategory}</td>
                <td>
                  <button
                    className="rounded bg-danger text-light px-2 border-0"
                    onClick={() => handleDelete(product._id)}
                  >
                    Delete
                  </button>
                </td>
                <td>
                  <button
                    className="rounded bg-primary text-light px-2 border-0"
                    onClick={()=>handleEdit(product)}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">No products available</td>
            </tr>
          )}
        </tbody>
      </table>

      {showModal && (
        <div className="modle-overlay">
          <div className="modle">
            <h3>{editMode ? "Edit Product" : "Add New Product"}</h3>
            <form
              className="user-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleAddProduct();
              }}
            >
              <label>Product Name:</label>
              <input
                type="text"
                name="productname"
                value={formData.productname}
                onChange={handleInputChange}
              />
              <label>Product Image:</label>
              <input
                type="file"
                name="productImage"
                onChange={handleFileChange}
              />
               <label>Product Price:</label>
              <input
                type="text"
                name="productprice"
                value={formData.productprice}
                onChange={handleInputChange}
              />
               <label>Product Description:</label>
              <input
                type="text"
                name="productdescription"
                value={formData.productdescription}
                onChange={handleInputChange}
              />
               <label>Product Category:</label>
               <select 
                 id="productcategory"
                type="text"
                name="productcategory"
                value={formData.productcategory}
                onChange={handleInputChange}
              >

              <option value="">--Select a Category --</option>
              {Array.isArray(categories)&& categories.length>0?(
                categories.map((category)=>(
                  <option key={category._id} value={category.categoryname}>
                    {category.categoryname}
                  </option>
                ))
              ):(
                <option value="" disabled>
                  No categories available
                </option>
              )}
              </select>
              <div className="modle-buttons">
                <button
                  type="submit"
                  className="save-btn">
                  {/* // onClick={handleAddProduct} */}
                {editMode ? "Update" : "Save"}

                </button>
                <button  className="bg-danger text-light  px-2 py-2 border-0 rounded flex-end"type="button" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Slider;

