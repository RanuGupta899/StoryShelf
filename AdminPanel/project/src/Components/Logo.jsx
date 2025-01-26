import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Common.css";

function Logo() {
  const [showModal, setShowModal] = useState(false);
  const [logos, setLogos] = useState([]);
  const [formData, setFormData] = useState({
    logoname: "",
    logoImage: null,
  });

  // Fetch logo from the server
  const fetchLogos = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/logo/getlogo"
      );
      console.log(response)
      setLogos(response.data.logo);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch logos", "error");
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({ ...formData, logoImage: e.target.files[0] });
  };

  // Add new slider
  const handleAddLogo = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("logoname", formData.logoname);
      formDataToSend.append("logoImage", formData.logoImage);

      await axios.post("http://localhost:3000/logo/save", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire("Success", "logo added successfully!", "success");
      setShowModal(false);
      fetchLogos();
    } catch (error) {
      Swal.fire("Error", "Failed to add logo", "error");
    }
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
          `http://localhost:3000/logo/deletelogo/${Id}`
        );
        Swal.fire("Deleted", "Product has been deleted", "success");
        fetchLogos();
      } catch (error) {
        Swal.fire("Failed", "Failed to delete data", "error");
        console.error(error);
      }
    } else {
      Swal.fire("Canceled", "Your data is safe", "info");
    }
  };


  useEffect(() => {
    fetchLogos();
  }, []);

  return (
    <div className="users-container">
      <div className="top-bar">
        <input className="search-box" type="text" placeholder="Search..." />
        <button className="add-use-btn" onClick={() => setShowModal(true)}>
          Add Logo
        </button>
      </div>

      {/* Display Logo */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Logo Name</th>
            <th>Logo Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {logos.map((logo) => (
            <tr key={logo._id}>
              <td>{logo.logoname}</td>
              <td>
                <img
                  src={`http://localhost:3000/uploads/${logo.logoImage}`} // Ensure this path is correct
                  alt={logo.logoname}
                  style={{ width: "100px", height: "auto" }}
                />
              </td>
              <td>
                <button
                  className="rounded bg-danger text-light px-2 border-0"
                  onClick={() => handleDelete(logo._id)}
                >Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal for Adding a Slider */}
      {showModal && (
        <div className="modle-overlay">
          <div className="modle">
            <h3>Add New Logo</h3>
            <form
              className="user-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleAddLogo();
              }}
            >
              <label>Logo Name:</label>
              <input
                type="text"
                name="logoname"
                value={formData.logoname}
                onChange={handleInputChange}
              />
              <label>logo Image:</label>
              <input
                type="file"
                name="logoImage"
                onChange={handleFileChange}
              />
              <div className="modal-buttons">
                <button
                  type="button"
                  className="save-btn"
                  onClick={handleAddLogo}
                >
                  Save
                </button>
                <button type="button" onClick={() => setShowModal(false)}>
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

export default Logo;