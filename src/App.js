import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Navbar/navbar';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import aboutMe from './components/about/aboutme';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <>
      <div className="App-header">
        <Header />
        <Home />
        <Footer />
      </div>
    </>
  );
}

export default App;
