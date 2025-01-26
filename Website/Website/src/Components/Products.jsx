import React from "react";
import Slider from "react-slick";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const CardSlider = () => {

    const [products, setProducts] = useState([]);
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
    useEffect(() => {
      fetchProduct(); // Fetch products when component mounts
    }, []);


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Number of visible cards
    slidesToScroll: 1, // Number of cards to slide at once
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1, // Adjust for smaller screens
        },
      },
    ],
  };

//   const products= [
//     {
//       title: "Card Title 1",
//       description: "This is a brief description of the card.",
//       reviews: 120,
//       price: 50,
//     },
//     {
//       title: "Card Title 2",
//       description: "This is another card with cool details.",
//       reviews: 85,
//       price: 50,
//     },
//     {
//       title: "Card Title 3",
//       description: "An awesome card to display your content.",
//       reviews: 150,
//       price: 50,
//     },
//     {
//         title: "Card Title 1",
//         description: "This is a brief description of the card.",
//         reviews: 120,
//         price: 50,
//       },
//       {
//         title: "Card Title 2",
//         description: "This is another card with cool details.",
//         reviews: 85,
//         price: 50,
//       },
//       {
//         title: "Card Title 3",
//         description: "An awesome card to display your content.",
//         reviews: 150,
//         price: 50,
//       },
//   ];

  return (
    <div style={{ backgroundColor: "#FEF4F4",paddingBottom:"20px"}}>
    <div className="card-slider-container py-5" >
        <h1 className="mx-auto text-center py-4" style={{ fontFamily: "cursive" }} >Best Selling Books Ever</h1>
      <Slider {...settings}>
        {products.map((Product, index) => (
          <div key={index} className="card-container">
            <div className="card">
              <img
             src={`http://localhost:3000/uploads/${Product.productImage}`}
             alt={Product.title}
             style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px 8px 0 0",
              }}
                className="card-img-top"
              />
              <div className="card-body">
                <h5 className="card-title">{Product.productname}</h5>
                <p className="card-text">{Product.productdescription}</p>
                <div className="reviews">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} color="red" />
                  ))}
                   </div>
                  <span className="review-count"> (120 reviews)</span>
                <div className="price" style={{ textAlign: "right" }}>
                  <span style={{ color: "red", fontSize: "1.2rem" }}>$ 50</span>
                  <span style={{ color: "red", fontSize: "1.2rem" }}>
                    {Product.ProductPrice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    </div>
  );
};

export default CardSlider;
