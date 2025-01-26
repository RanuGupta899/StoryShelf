import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-rose-50 text-dark" style={{ padding: "40px 0" }}>
      <Container>
        <Row>
          {/* Column 1: Logo, About, and Social Media Icons */}
          <Col md={4}>
            <img src="http://localhost:3000/uploads/1733650960226_logo.png.webp" alt="image" className="m-4" />
            <p style={{ fontSize: "14px" }}>
              Get the breathing space now, and we’ll extend your term at the other end year for go.
            </p>
            {/* Social Media Icons */}
          <div className="flex space-x-4">
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center border-2 border-gray rounded-full text-black transition-all duration-300 hover:bg-red-300 hover:text-red-300"
      >
        <FaFacebookF />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center border-2 border-gray rounded-full text-black transition-all duration-300 hover:bg-red-300 hover:text-red-300"
      >
        <FaTwitter />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center border-2 border-gray rounded-full text-black transition-all duration-300 hover:bg-red-300 hover:text-red-300"
      >
        <FaInstagram />
      </a>
      <a
        href="#"
        className="w-10 h-10 flex items-center justify-center border-2 border-gray rounded-full text-black transition-all duration-300 hover:bg-red-300 hover:text-red-300"
      >
        <FaLinkedinIn />
      </a>
    </div>
          </Col>

          {/* Column 2: Book Categories */}
          <Col md={2}>
            <h6 className="mb-3">Book Category</h6>
            <ul className="list-unstyled" style={{ fontSize: "14px" ,lineHeight:"40px"  }}>
              <li>History</li>
              <li>Horror - Thriller</li>
              <li>Love Stories</li>
              <li>Science Fiction</li>
              <li>Business</li>
            </ul>
          </Col>

          {/* Column 3: Additional Categories */}
          <Col md={3}>
            <ul className="list-unstyled" style={{ fontSize: "14px" ,lineHeight:"40px" }}>
              <li>Biography</li>
              <li>Astrology</li>
              <li>Digital Marketing</li>
              <li>Software Development</li>
              <li>Ecommerce</li>
            </ul>
          </Col>

          {/* Column 4: Site Map */}
          <Col md={3}>
            <h6 className="mb-3">Site Map</h6>
            <ul className="list-unstyled" style={{ fontSize: "14px",lineHeight:"40px"  }}>
              <li>Home</li>
              <li>About Us</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </Col>

     
        </Row>

        {/* Bottom Footer */}
        <hr style={{ backgroundColor: "#6c757d" }} />
        <div className="text-center" style={{ fontSize: "14px" }}>
          &copy; {new Date().getFullYear()} ABC Book. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
