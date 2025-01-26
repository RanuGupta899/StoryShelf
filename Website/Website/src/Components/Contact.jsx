import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import Navbar from './Navbar';
import Footer from './Footer';

const ContactPage = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="p-0">
        <Row className="position-relative">
          <Col sm={12}>
            <div className="overlay-container1">
              <img
                src="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero2.jpg"
                alt=""
                className="img-fluid w-100"
                height="auto"
              />
            </div>
            <div className="overlay-content1 position-absolute top-50 start-50 translate-middle text-center">
              <h1 className="text-white">Contact Us</h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-5" style={{ maxWidth: '1200px' }}>
        <Row className="g-4">
          {/* Left Section: Contact Form */}
          <Col md={6} sm={12} className="bg-light p-4 rounded shadow-sm">
            <h3 className="mb-4">Get in Touch</h3>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} placeholder="Write your message" />
              </Form.Group>
              <Button variant="primary" type="submit" className="w-100">
                Submit
              </Button>
            </Form>
          </Col>

          {/* Right Section: Map and Contact Info */}
          <Col md={6} sm={12}>
            <div className="rounded shadow-sm mb-4">
              {/* Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0202552160636!2d144.96487351589794!3d-37.81720947975152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5772e6e3fbedf4!2sFederation%20Square!5e0!3m2!1sen!2sau!4v1698583587382!5m2!1sen!2sau"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Google Map"
              ></iframe>
            </div>

            <div className="p-4 bg-light rounded shadow-sm">
              <h5>Contact Information</h5>
              <hr />
              <p>
                <FaMapMarkerAlt className="me-2 text-primary" />
                123 Main Street, Melbourne, VIC 3000
              </p>
              <p>
                <FaPhoneAlt className="me-2 text-success" />
                +61 123 456 789
              </p>
              <p>
                <FaEnvelope className="me-2 text-danger" />
                contact@yourwebsite.com
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ContactPage;
