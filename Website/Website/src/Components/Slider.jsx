import Carousel from 'react-bootstrap/Carousel';
import React, { useState,useEffect } from 'react';
import axios from "axios";
import Swal from "sweetalert2";
// import Container from 'react-bootstrap';

function Slider(){
  const [sliders, setSliders] = useState([]);


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
useEffect(() => {
  fetchSliders();
}, []);


  return (
    <div className="outer bg-rose-50" style={{paddingBottom:"20px"}}>
    <div className="container">
    <Carousel>
        {sliders.map((slider,index)=>(

      <Carousel.Item key={index}>
         <img
                  src={`http://localhost:3000/uploads/${slider.sliderImage}`} 
                  alt={slider.slidername}
                  style={{ width: "100vw", height: "100vh" }}
                />
        <Carousel.Caption>
          <h1>The History of <br/>Phipino</h1>
          <button className=' mt-4 h-10 w-40 bg-red-600 border-0 rounded' >Browse Store</button>
        </Carousel.Caption>
      </Carousel.Item>
        ))}
    </Carousel>
    </div>
    </div>
  );
}

export default Slider;