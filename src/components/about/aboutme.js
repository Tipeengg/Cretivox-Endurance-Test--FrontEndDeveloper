import React from 'react';
import picture from '../assets/img/profile.png';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function aboutMe() {
  return (
    <div className="picture ">
      <img src={picture}></img>
    </div>
  );
}

export default aboutMe();
