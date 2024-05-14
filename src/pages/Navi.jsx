import React from "react";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';

const Navi = () => {
  return (
    <NavBar expand="lg" bg="dark" data-bs-theme="dark">
      <Container>
        <NavBar.Brand href="#">JOHN DOE</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav>
            <Link to="/">Accueil</Link>          
            <Link to="/blog">Blog</Link>
            <Link to="/realisations">Réalisations</Link>
            <Link to="/contacts">Me contacter</Link>
            <Link to="/services">Services</Link>
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default Navi;
