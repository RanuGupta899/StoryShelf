import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const NewsletterSection = () => {
  return (
    <>
   
    <Container className="">
      <Row>
        {/* First Column */}
        <Col md={6} className="mb-4">
          <div className="image-overlay-container">
            <img 
              src="https://preview.colorlib.com/theme/abcbook/assets/img/gallery/wants-bg1.jpg.webp" 
              alt="History of Philippines" 
              className="w-100"
            />
            <div className="overlay-content">
              <h4 className="text-white ">The History <br/>of Phipino</h4>
              
              <Button 
                variant="danger" 
                className=" btn1 rounded-pill py-2"
              >
                View Details
              </Button>
            </div>
          </div>
        </Col>

        {/* Second Column */}
        <Col md={6} className="mb-4">
          <div className="image-overlay-container">
            <img 
              src="	https://preview.colorlib.com/theme/abcbook/assets/img/gallery/wants-bg2.jpg" 
              alt="History of Philippines" 
              className="w-100"
            />
            <div className="overlay-content">
              <h4 className="text-white mx-2">Wilma Mumduya</h4>
              
              <Button 
                variant="danger" 
                className=" btn1 rounded-pill py-2"
              >
                View Details
              </Button>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  

    <Container className=" text-center py-5 text-light" style={{backgroundImage:"url(https://preview.colorlib.com/theme/abcbook/assets/img/gallery/section-bg1.jpg)",height:"350px",  }}>
      <Row>
        <Col md={{ span: 8, offset: 2 }}>
          <h1 style={{fontFamily:"Allura",marginTop:"20px"}}>Join Newsletter</h1>
          <p>
          Lorem started its journey with cast iron (CI) products in 1980. The initial main objective was to ensure pure water and affordable irrigation.          </p>
          <Form>
            <Form.Group className="d-flex justify-content-center">
              <Form.Control
                type="email"
                placeholder="Enter your email"
                className="me-2 rounded-pill"
                style={{ maxWidth: "300px" }}
              />
              <Button
                variant="danger"
                className="rounded-pill px-4"
                type="submit"
              >
                Subscribe
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
    </>
  );
};

export default NewsletterSection;
