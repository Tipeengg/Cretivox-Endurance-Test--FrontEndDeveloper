// import React from 'react';
import React, { useEffect, useRef } from 'react';
import './footer.css';
import { gsap } from 'gsap/gsap-core';
import { Container, Row, Col } from 'react-bootstrap';
import { FaBeer } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';

import { MdAttachEmail } from 'react-icons/md';

function Footer() {
  const footerRef = useRef(null);
  useEffect(() => {
    const elements = footerRef.current.querySelectorAll('.main-sosialmedia');

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.3,
        scrollTrigger: {
          trigger: footerRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <footer>
      <div className="end-footer" ref={footerRef}>
        <h1>Contact me </h1>
        <div className="footer-socialmedia">
          <Container>
            <Row>
              <Col md={4}>
                <div className="main-sosialmedia">
                  <i>
                    <MdAttachEmail />
                  </i>
                  <h3>stevengonzali57@gmail.com</h3>
                </div>
              </Col>
              <Col md={4}>
                <div className="main-sosialmedia">
                  <i>
                    <FaLinkedin />
                  </i>
                  <h3>Linkedin</h3>
                </div>
              </Col>
              <Col md={4}>
                <div className="main-sosialmedia">
                  <i>
                    <FaWhatsapp />
                  </i>
                  <h3>+62813-9810-9121</h3>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
