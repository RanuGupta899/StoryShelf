import { useState } from "react";
import { Container,Row,Col } from "react-bootstrap";
import { RadioGroup } from "@headlessui/react";
import { StarIcon } from "@heroicons/react/20/solid"; // Star icon for reviews
// import { ShareIcon } from "@heroicons/react/20/outline"; // Share icon

const product = {
  name: "The Rage of Dragons",
  price: "$89",
  description: "By Evan Winter",
  imageSrc:
    "https://preview.colorlib.com/theme/capitalshop/assets/img/gallery/latest7.jpg",
  imageAlt: "A book cover for The Rage of Dragons.",
  colors: [
    { name: "Navy", class: "bg-blue-800", selectedClass: "ring-blue-800" },
    { name: "Gray", class: "bg-gray-400", selectedClass: "ring-gray-400" },
    { name: "Black", class: "bg-black", selectedClass: "ring-black" },
  ],
  rating: 4.2, // Average rating for the product
  reviewCount: 120, // Number of reviews
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function FullScreenProduct() {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);


  const [activeTab, setActiveTab] = useState("description");

  const tabs = [
    { name: "Description", value: "description" },
    { name: "Author", value: "author" },
    { name: "Comment", value: "comment" },
    { name: "Review", value: "review" },
  ];


  return (

<>
<Container>
        <Row>
          <Col sm={12} >
            {/* <div className='overlay-container1'>
              <img src="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero2.jpg" alt="" height={"100%"} width={"100%"} />
            </div> */}
            <div className=" flex  w-full h-60 items-center justify-center" style={{backgroundColor:"beige"}}>
              <h1 className='text-white '>Product Details</h1>
            </div>
          </Col>
        </Row>
        </Container>


    <div className=" container  m-5 h-100 flex flex-col bg-gray-100">
      {/* Full Product Display Section */}
      <div className="flex items-center justify-center p-8 bg-white-500"> {/* Vibrant Red */}
        <div className="flex max-w-7xl w-full items-center justify-center">
          <div className="flex flex-col sm:flex-row w-full">
            {/* Product Image */}
            <img
              src={product.imageSrc}
              alt={product.imageAlt}
              className="w-full sm:w-1/2 h-96 rounded-lg object-cover" 
            />
            <div className="sm:w-1/2 p-6 sm:p-12">
              <h2 className="text-3xl font-bold text-gray-900">{product.name}</h2>
              <p className="mt-4 text-base text-gray-600">{product.description}</p>
              <p className="mt-2 text-2xl text-gray-700">{product.price}</p>

              {/* Star Rating and Reviews Section */}
              <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Reviews</h3>
                <div className="flex items-center mt-2">
                  {/* Star Icons */}
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        aria-hidden="true"
                        className={classNames(
                          product.rating > rating ? "text-white" : "text-gray-300",
                          "h-10 w-10"
                        )}
                      />
                    ))}
                  <p className="ml-3  mt-3 text-sm text-gray-700">
                    {product.reviewCount} reviews
                  </p>
                  </div>

                </div>
              </div>

              {/* Color Filter */}
              {/* <div className="mt-6">
                <h3 className="text-sm font-medium text-gray-900">Color</h3>
                <RadioGroup
                  value={selectedColor}
                  onChange={setSelectedColor}
                  className="mt-2 flex space-x-3"
                >
                  {product.colors.map((color) => (
                    <RadioGroup.Option
                      key={color.name}
                      value={color}
                      className={({ active, checked }) =>
                        classNames(
                          color.selectedClass,
                          "relative flex h-8 w-8 cursor-pointer items-center justify-center rounded-full",
                          checked ? "ring-2 ring-offset-2" : "",
                          active ? "ring-gray-500" : ""
                        )
                      }
                    >
                      <span
                        aria-hidden="true"
                        className={classNames(color.class, "h-6 w-6 rounded-full")}
                      />
                    </RadioGroup.Option>
                  ))}
                </RadioGroup>
              </div> */}

              {/* Add to Cart Button */}
              <button
                type="button"
                className="mt-6 w-1/3 rounded-pill bg-white px-4 py-3 text-dark hover:bg-light-700"
                onClick={() =>
                  alert(`Added to cart: ${selectedColor.name}`)
                }
              >
                Add to Cart
              </button>

              {/* Share Button */}
              {/* <button
                type="button"
                className="mt-4 w-full rounded-lg bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 flex items-center justify-center"
                onClick={() => alert("Sharing this product...")}
              >
                {/* <ShareIcon className="h-5 w-5 mr-2 text-white" /> */}
                {/* Share
              </button> */} 
            </div>
          </div>
        </div>
      </div>
    </div>
   
    <div className="flex flex-col">
      {/* Navigation Bar */}
      <div className="flex space-x-8 p-6 ">
        {tabs.map((tab) => (
          <div
            key={tab.value}
            className="cursor-pointer text-lg "
            onClick={() => setActiveTab(tab.value)}
          >
            <span
              className={`relative ${
                activeTab === tab.value ? "text-red-600" : "text-gray-800"
              }`}
            >
              {tab.name}
              {activeTab === tab.value && (
                <span className="absolute -bottom-3 left-0 w-full h-1 bg-red-600"></span>
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Content Section */}
      <div className="flex-1 p-8">
        {activeTab === "description" && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Product Description</h2>
            <p className="container mt-4 text-gray-700">
            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and
            <br />

It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.
            </p>
          </div>
        )}

        {activeTab === "author" && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Author</h2>
            <p className="container mt-4 text-gray-700">
            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook.
            <br />
             He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and

It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.            </p>
          </div>
        )}

        {activeTab === "comment" && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Comment</h2>
            <p className=" container mt-4 text-gray-700">
            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. 
            
            After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. 
            <br />
            John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and

It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.            </p>
          </div>
        )}

        {activeTab === "review" && (
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">Review</h2>
            <p className=" container mt-4 text-gray-700">
            Beryl Cook is one of Britain’s most talented and amusing artists .Beryl’s pictures feature women of all shapes and sizes enjoying themselves .Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband and

            It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and Internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person creating less.
            </p>
          </div>
        )}
      </div>
    </div>


  



    </>
  );
}
