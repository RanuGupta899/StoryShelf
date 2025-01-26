import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
import axios from "axios";
import { FaSearch, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {
  const [logo, setLogos] = useState([]);
  const [cartQuantity, setCartQuantity] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartQuantity(cartItems.length);

    const handleStorageChange = () => {
      const updatedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
      setCartQuantity(updatedCartItems.length);
    };

    window.addEventListener("storage", handleStorageChange);
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const fetchLogos = async () => {
    try {
      const response = await axios.get("http://localhost:3000/logo/getlogo");
      setLogos(response.data.logo);
    } catch (error) {
      Swal.fire("Error", "Failed to fetch logos", "error");
    }
  };

  useEffect(() => {
    fetchLogos();
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-white shadow-md">
      {/* Top Header */}
      <header className="py-4 px-6">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo Section */}
          <div>
            {logo.length > 0 ? (
              <img
                src={`http://localhost:3000/uploads/${logo[0].logoImage}`}
                alt={logo[0]?.logoname || "Logo"}
                className="w-24 h-auto max-h-12"
              />
            ) : (
              <span>Loading...</span>
            )}
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search books..."
              className="border rounded-lg px-4 py-2 w-full max-w-xs"
            />
            <button className="bg-gray-200 px-4 py-2 rounded-lg">
              <FaSearch />
            </button>
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            {/* Mobile Menu Toggle */}
            <button
              className="md:hidden text-gray-700"
              onClick={toggleMenu}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </button>

            <div className="relative hidden md:block">
              <a href="/faq" className="text-gray-700 hover:text-rose-600 no-underline">
                FAQ
              </a>
            </div>
            <div className="relative hidden md:block">
              <a href="/track-order" className="text-gray-700 hover:text-rose-600 no-underline">
                Track Order
              </a>
            </div>
            <div className="relative hidden md:block">
              <a href="/cart" className="text-gray-700 hover:text-rose-600 flex items-center">
                <FaShoppingCart />
                {cartQuantity > 0 && (
                  <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
                    {cartQuantity}
                  </span>
                )}
              </a>
            </div>
            <div className="relative hidden md:block">
              <a
                href="/signin"
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 no-underline"
              >
                Sign In
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Navbar Links */}
      <nav
        className={`bg-rose-50 md:flex md:items-center md:justify-evenly transition-all duration-300 ${
          isMenuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 py-4">
            <li>
              <Link to="/" className="text-gray-700 font-semibold hover:text-rose-600 no-underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/bookcategory" className="text-gray-700 font-semibold hover:text-rose-600 no-underline">
                Categories
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-gray-700 font-semibold hover:text-rose-600 no-underline">
                About
              </Link>
            </li>
            <li>
              <Link to="/cart" className="text-gray-700 font-semibold hover:text-rose-600 no-underline">
                Cart
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-700 font-semibold hover:text-rose-600 no-underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;

