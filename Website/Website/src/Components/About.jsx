import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navbar from './Navbar';
import Footer from './Footer';

const About = () => {
  return (
    <>
      <Navbar />
      <Container fluid className="p-0">
        <Row>
          <Col sm={12}>
            <div className="overlay-container1">
              <img
                src="https://preview.colorlib.com/theme/abcbook/assets/img/hero/h2_hero2.jpg"
                alt=""
                className="img-fluid w-100"
              />
            </div>
            <div className="overlay-content1">
              <h1 className="text-white text-center">About Us</h1>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="py-5" style={{ maxWidth: '1200px' }}>
        <Row className="g-4">
          {/* Left Section: Our Story */}
          <Col md={6} sm={12}>
            <div className="m-5" style={{ fontFamily: 'Allura' }}>
              <h1>Our Story</h1>
            </div>
            <div className="text-secondary m-5">
              <p>
                Beryl Cook is one of Britain’s most talented and amusing artists. Beryl’s pictures feature women of all shapes and sizes enjoying themselves. Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next-door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday, and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband.

                It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person, creating less.
              </p>
            </div>
          </Col>

          {/* Right Section: Our Goal */}
          <Col md={6} sm={12}>
            <div className="m-5" style={{ fontFamily: 'Allura' }}>
              <h1>Our Goal</h1>
            </div>
            <div className="text-secondary m-5">
              <p>
                Beryl Cook is one of Britain’s most talented and amusing artists. Beryl’s pictures feature women of all shapes and sizes enjoying themselves. Born between the two world wars, Beryl Cook eventually left Kendrick School in Reading at the age of 15, where she went to secretarial school and then into an insurance office. After moving to London and then Hampton, she eventually married her next-door neighbour from Reading, John Cook. He was an officer in the Merchant Navy and after he left the sea in 1956, they bought a pub for a year before John took a job in Southern Rhodesia with a motor company. Beryl bought their young son a box of watercolours, and when showing him how to use it, she decided that she herself quite enjoyed painting. John subsequently bought her a child’s painting set for her birthday, and it was with this that she produced her first significant work, a half-length portrait of a dark-skinned lady with a vacant expression and large drooping breasts. It was aptly named ‘Hangover’ by Beryl’s husband.

                It is often frustrating to attempt to plan meals that are designed for one. Despite this fact, we are seeing more and more recipe books and internet websites that are dedicated to the act of cooking for one. Divorce and the death of spouses or grown children leaving for college are all reasons that someone accustomed to cooking for more than one would suddenly need to learn how to adjust all the cooking practices utilized before into a streamlined plan of cooking that is more efficient for one person, creating less.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default About;
