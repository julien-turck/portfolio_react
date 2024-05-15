import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import '../css/Navi.css';

const Navi = () => {
  return (
    <NavBar expand="lg" bg="dark" data-bs-theme="dark" className="navbar">  
      <Container className="navbarContain">
        <NavBar.Brand href="#">JOHN DOE</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/" className="link">Accueil</Link>
            <Link to="/services" className="link">Services</Link>
            <Link to="/realisations" className="link">Réalisations</Link>          
            <Link to="/blog" className="link">Blog</Link>            
            <Link to="/contacts" className="link">Me contacter</Link>            
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default Navi;
