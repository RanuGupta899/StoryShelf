import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";
import axios from "axios";
import "./common.css";

function Category() {
  const [filteredcategories, setFilteredCategories] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [categoriesData, setCategoriesData] = useState([]);
  const [formData, setFormData] = useState({
    categoryname: "",
  });

  // Fetch categories from the API
   const fetchCategories = async () => {
    try {
      const response = await axios.get("http://localhost:3000/category/getcategory");
      setCategoriesData(response.data.categories);
      setFilteredCategories(response.data.categories);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch categories", "error");
    }
  };

  // Handle input change for the form
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Add new category
  const handleAddCategory = async () => {
    try {
      await axios.post("http://localhost:3000/category/save", formData);
      Swal.fire("Success", "Category successfully added", "success");
      setShowModal(false); // Close modal after successful addition
      setFormData({ categoryname: "" }); // Reset form data
      fetchCategories();
    } catch (error) {
      Swal.fire("Error", "Failed to save category", "error");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  // Handle search functionality
  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchItem(term);
    const filteredList = categoriesData.filter((category) =>
      category.categoryname.toLowerCase().includes(term)
    );
    setFilteredCategories(filteredList);
  };

  // Handle delete functionality
  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this category!",
      icon: "warning",
      showCancelButton: true,
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Delete",
    });

    if (result.isConfirmed) {
      try {
        await axios.delete(`http://localhost:3000/category/delete/${id}`);
        Swal.fire("Deleted", "Category has been deleted", "success");
        fetchCategories();
      } catch (error) {
        Swal.fire("Error", "Failed to delete category", "error");
        console.error(error);
      }
    } else {
      Swal.fire("Cancelled", "Your data is safe", "info");
    }
  };

  return (
    <div className="users-container">
      <div className="top-bar">
        <input
          className="search-box"
          type="text"
          value={searchItem}
          onChange={handleSearch}
          placeholder="Search..."
        />
        {/* Show modal on button click */}
        <button className="add-use-btn" onClick={() => setShowModal(true)}>
          Add Category
        </button>
      </div>

      {/* Display categories in a table */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Category Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredcategories.map((category, index) => (
            <tr key={index}>
              <td>{category.categoryname}</td>
              <td>
                <button
                  className="rounded bg-danger text-light px-2 border-0"
                  onClick={() => handleDelete(category._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for adding a category */}
      {showModal && (
        <div className="modle-overlay">
          <div className="modle">
            <h3>Add New Category</h3>
            <form
              className="user-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleAddCategory();
              }}
            >
              <label htmlFor="">Category Name:</label>
              <input
                type="text"
                name="categoryname"
                value={formData.categoryname}
                onChange={handleInputChange}
              />
              <div className="modle-buttons">
                <button type="submit" className="save-btn">
                  Save
                </button>
                <button
                  type="button"
                  className="cancel-btn"
                  onClick={() => setShowModal(false)}
                >
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

export default Category;
