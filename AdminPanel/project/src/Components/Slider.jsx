import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./common.css";

function Slider() {
  const [showModal, setShowModal] = useState(false);
  const [sliders, setSliders] = useState([]);
  const [formData, setFormData] = useState({
    slidername: "",
    sliderImage: null,
  });

  // Fetch sliders from the server
  const fetchSliders = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/upload/getsliders"
      );
      setSliders(response.data.sliders);
      console.log(response)
    } catch (error) {
      Swal.fire("Error", "Failed to fetch sliders", "error");
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle file input change
  const handleFileChange = (e) => {
    setFormData({ ...formData, sliderImage: e.target.files[0] });
  };

  // Add new slider
  const handleAddSlider = async () => {
    try {
      const formDataToSend = new FormData();
      formDataToSend.append("slidername", formData.slidername);
      formDataToSend.append("sliderImage", formData.sliderImage);

      await axios.post("http://localhost:3000/upload/save", formDataToSend, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      Swal.fire("Success", "Slider added successfully!", "success");
      setShowModal(false);
      fetchSliders();
    } catch (error) {
      Swal.fire("Error", "Failed to add slider", "error");
    }
  };

  useEffect(() => {
    fetchSliders();
  }, []);



  // delete slider
  const handleDelete=async(Id)=>{
    // console.log(id);
  
    const result=await Swal.fire({
        title:"Are you Sure?",
        text:"Once deleted,you will not be  able to recover this product!",
        icon:"warning",
        showCancelButton:true,
        cancelButtonColor:"#d33",
        confirmButtonText:"Yes,Delete"
    });
    if(result.isConfirmed){
        try{
            const response=await axios.delete(`http://localhost:3000/upload/deleteslider/${Id}`);
            Swal.fire("Deleted","Slider has been deleted ","success");
            fetchSliders();
        }
        catch(error){
            Swal.fire("Failed","Failed to delete data","error");
            console.log(error)
        }
    }
    else{
        Swal.fire("Canceled","Your data is safe","info");
    }
  } 
const handleModel = ()=>{
  console.log('')
  setShowModal(true)
}
  return (
    <div className="users-container">
      <div className="top-bar">
        <input className="search-box" type="text" placeholder="Search..." />
        <button className="add-use-btn" onClick={() => setShowModal(true)}>
          Add Slider
        </button>
      </div>

      {/* Display Sliders */}
      <table className="user-table">
        <thead>
          <tr>
            <th>Slider Name</th>
            <th>Slider Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {sliders.map((slider) => (
            <tr key={slider._id}>
              <td>{slider.slidername}</td>
              <td>
                <img
                  src={`http://localhost:3000/uploads/${slider.sliderImage}`} 
                  alt={slider.slidername}
                  style={{ width: "60px", height: "60px" }}
                />
              </td>
              <td>
                <button className='rounded bg-danger text-light px-2 border-0'
                onClick={()=>handleDelete(slider._id)}
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
            <h3>Add New Slider</h3>
            <form
              className="user-form"
              onSubmit={(e) => {
                e.preventDefault();
                handleAddSlider();
              }}
            >
              <label>Slider Name:</label>
              <input
                type="text"
                name="slidername"
                value={formData.slidername}
                onChange={handleInputChange}
              />
              <label>Slider Image:</label>
              <input
                type="file"
                name="sliderImage"
                onChange={handleFileChange}
              />
              <div className="modle-buttons">
                <button
                  type="button"
                  className="save-btn"
                  onClick={handleAddSlider}
                >
                  Save
                </button>
                <button type="button" className="bg-primary  m-4 px-2 py-2 rounded border-0 text-light" onClick={() => setShowModal(false)}>
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

export default Slider;