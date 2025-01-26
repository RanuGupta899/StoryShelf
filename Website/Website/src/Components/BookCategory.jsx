import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';
import News from './News';

const CategoryPage = () => {
  // State for filters
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState([]);
  const [selectedPublishers, setSelectedPublishers] = useState([]);
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(4);

  const isExpanded = visibleCount >= products.length;

  // Fetch products
  const fetchProduct = async () => {
    try {
      const response = await axios.get('http://localhost:3000/product/getproduct');
      setProducts(response.data.products || []);
    } catch (error) {
      console.error('Failed to fetch products', error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  const handleGenreChange = (genre) => {
    setSelectedGenres((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    );
  };

  const handlePriceChange = (priceRange) => {
    setSelectedPrice((prev) =>
      prev.includes(priceRange) ? prev.filter((p) => p !== priceRange) : [...prev, priceRange]
    );
  };

  const handlePublisherChange = (publisher) => {
    setSelectedPublishers((prev) =>
      prev.includes(publisher) ? prev.filter((p) => p !== publisher) : [...prev, publisher]
    );
  };

  const toggleVisibility = () => {
    setVisibleCount(isExpanded ? 4 : products.length);
  };

  return (
    <>
      <Navbar />
      <Container>
        <Row>
          <Col sm={12}>
            <div className="relative w-full h-64">
              <img
                src="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero1.jpg"
                alt="Book Category"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                <h1 className="text-white text-4xl font-bold">Book Category</h1>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <div className="flex flex-col lg:flex-row p-6 space-y-6 lg:space-y-0">
        {/* Left Section: Filters */}
        <div className="lg:w-1/4 w-full bg-gray-100 p-6 rounded-md">
          <h2 className="text-xl font-bold mb-6">Filters</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Filter by Genres</h3>
            <ul className="space-y-3">
              {['Fiction', 'Non-fiction', 'Mystery', 'Romance'].map((genre) => (
                <li key={genre}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => handleGenreChange(genre)}
                      className="mr-2"
                    />
                    {genre}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-4">Filter by Price</h3>
            <ul className="space-y-3">
              {['Under $10', '$10 - $20', '$20 - $50', 'Above $50'].map((price) => (
                <li key={price}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => handlePriceChange(price)}
                      className="mr-2"
                    />
                    {price}
                  </label>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Filter by Publisher</h3>
            <ul className="space-y-3">
              {['Penguin Random House', 'HarperCollins', 'Macmillan', 'Hachette'].map((publisher) => (
                <li key={publisher}>
                  <label>
                    <input
                      type="checkbox"
                      onChange={() => handlePublisherChange(publisher)}
                      className="mr-2"
                    />
                    {publisher}
                  </label>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Section: Product List */}
        <div className="flex-1 m-4">
          <h2 className="text-2xl font-bold mb-6 ">Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
            {products.slice(0, visibleCount).map((product) => (
              <div
                key={product.id}
                className="border rounded-lg p-3 shadow hover:shadow-lg transition duration-300 bg-white"
              >
                <img
                  src={`http://localhost:3000/uploads/${product.productImage}`}
                  alt={product.productname}
                  className="w-full  object-cover rounded-t-lg"
                />
                <h3 className="text-lg font-semibold mt-2">{product.productname}</h3>
                <p className="text-gray-600">{product.productdescription}</p>
                <p className="text-blue-500 font-bold mt-2">${product.productprice}</p>
                <button
                  className="mt-2 w-1/2 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition duration-300"
                  onClick={() => alert(`${product.productname} added to cart!`)}
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <button
              className="px-6 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition duration-300"
              onClick={toggleVisibility}
            >
              {isExpanded ? 'Show Less' : 'Show More'}
            </button>
          </div>
        </div>
      </div>

      <News />
      <Footer />
    </>
  );
};

export default CategoryPage;
