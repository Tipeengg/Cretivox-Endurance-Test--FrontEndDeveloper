// import React from 'react';
import React, { useEffect, useLayoutEffect, useRef } from 'react';
import './home.css';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap, Power2 } from 'gsap'; // Import Power2 from gsap
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import picture from '../assets/img/profile.png';
import SD from '../assets/img/logoypk (1).png';
import SMP from '../assets/img/Surya Dharma.png';
import SMK from '../assets/img/tarakanita (1).png';
import UNIV from '../assets/img/binus.svg';
import django from '../assets/img/django.png';
import flutter from '../assets/img/flutter-logo-sharing-removebg-preview.png';
import html from '../assets/img/html.png';
import css from '../assets/img/CSS-Logo.png';
import js from '../assets/img/JavaScript-logo.png';
import figma from '../assets/img/Figma-1-logo.png';
import sql from '../assets/img/pgadmin.png';
import photoshop from '../assets/img/1200x630wa-removebg-preview (1).png';
import filmora from '../assets/img/image (10).png';

function Home() {
  const welcomeRef = useRef(null);
  const aboutme = useRef(null);
  const picture1 = useRef(null);
  const textRef = useRef(null);
  const eduHistoryRef = useRef(null);
  const frameworkRef = useRef(null);

  useLayoutEffect(() => {
    const elements = eduHistoryRef.current.querySelectorAll('.card');
    const element2 = frameworkRef.current.querySelectorAll('.card');

    gsap.to(welcomeRef.current, {
      duration: 1,
      opacity: 5,
      y: 100,
      ease: 'power1.in',
    });

    gsap.fromTo(
      picture1.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: picture1.current,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top 80%',
          end: 'top 30%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      elements,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: eduHistoryRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    gsap.fromTo(
      element2,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: frameworkRef.current,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div>
      <div className="main-home">
        <div className="welcome">
          <h1 ref={welcomeRef}>Welcome.</h1>
        </div>
      </div>
      <div className="about-me">
        <h1 className="aboutme-text" ref={textRef}>
          About me
        </h1>
        <Row>
          <Col md={6}>
            <img src={picture} alt="" ref={picture1} />
          </Col>
          <Col md={6}>
            <div className="description" ref={textRef}>
              <p>
                My Name is Steven Gozali i'm a Student College From Binus
                University majoring Information Systems and now i want to
                starting my carreer as Developer especially Front End Developer
                & Back End Developer
              </p>
            </div>
          </Col>
        </Row>
      </div>
      <div className="edu-history" ref={eduHistoryRef}>
        <h1>Education History</h1>
        <div className="list-edu">
          <Container>
            <Row>
              <Col md={3}>
                <div className="card">
                  <div className="edu-1">
                    <img src={SD} alt="Anugerah Abadi Primary School" />
                    <h3>Anugerah Abadi Primary School</h3>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="card">
                  <div className="edu-1">
                    <img src={SMP} alt="Surya Dharma Junior High School" />
                    <h3>Surya Dharma Junior High School</h3>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="card">
                  <div className="edu-1">
                    <img src={SMK} alt="Tarakanita Vocational High School" />
                    <h3>Tarakanita Vocational High School</h3>
                  </div>
                </div>
              </Col>
              <Col md={3}>
                <div className="card">
                  <div className="edu-1">
                    <img src={UNIV} alt="Binus University" />
                    <h3>Binus University</h3>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <div className="framework" ref={frameworkRef}>
        <h1>My Framework</h1>
        <Container>
          <Row>
            <Col md={3}>
              <div className="card">
                <div className="edu-1">
                  <img src={django} alt="" />
                  <h3>Django </h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="edu-1">
                  <img src={flutter} alt="" />
                  <h3>Flutter </h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="edu-1">
                  <img src={html} alt="" />
                  <h3>HTML </h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="edu-1">
                  <img src={css} alt="" />
                  <h3>CSS </h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="edu-1">
                  <img src={js} alt="" />
                  <h3>JavaScript </h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="edu-1">
                  <img src={figma} alt="" />
                  <h3>Figma </h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="edu-1">
                  <img src={sql} alt="" />
                  <h3>MySql </h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="edu-1">
                  <img src={photoshop} alt="" />
                  <h3>Adobe Photshop </h3>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="card">
                <div className="edu-1">
                  <img src={filmora} alt="" />
                  <h3>Wondershare Filmora </h3>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
    // <Container>
    //   <div className="main-home">
    //     <div className="welcome">
    //       <h1>Welcome.</h1>
    //     </div>
    //   </div>
    //   <div className="about-me">
    //     <h1>About me </h1>
    //     <Row>
    //       <Col md={6}>
    //         <img src={picture} alt="" />
    //       </Col>
    //       <Col md={6}>
    //         <div className="description bg-primary">
    //           <p>
    //             My Name is Steven Gozali i'm a Student College From Binus
    //             University majoring Information Systems and now i want to
    //             starting my carreer as Developer especially Front End Developer
    //             & Back End Developer
    //           </p>
    //         </div>
    //       </Col>
    //     </Row>
    //   </div>
    // </Container>
  );
}

export default Home;
