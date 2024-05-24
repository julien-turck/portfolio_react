import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavBar from 'react-bootstrap/NavBar';
import '../css/Navi.css';

const Navi = () => {
  return (
    <NavBar expand="lg" bg="dark" data-bs-theme="dark" className="navbar">  
      <Container id="navbarContain">
        <NavBar.Brand href="#" id='brand'>john doe</NavBar.Brand>
        <NavBar.Toggle aria-controls="basic-navbar-nav" />
        <NavBar.Collapse id="basic-navbar-nav">
          <Nav>
            <NavLink to="/" className="link"
              style={({isActive}) => {
                return {
                  color: isActive ? "#0d6efd" : "",
                };
              }}
            >Accueil</NavLink>
            <NavLink to="/services" className="link"
              style={({isActive}) => {
                return {
                  color: isActive ? "#0d6efd" : "",
                };
              }}
            >Services</NavLink>
            <NavLink to="/realisations" className="link"
              style={({isActive}) => {
                return {
                  color: isActive ? "#0d6efd" : "",
                };
              }}
            >Réalisations</NavLink>          
            <NavLink to="/blog" className="link"
              style={({isActive}) => {
                return {
                  color: isActive ? "#0d6efd" : "",
                };
              }}
            >Blog</NavLink>            
            <NavLink to="/contacts" className="link"
              style={({isActive}) => {
                return {
                  color: isActive ? "#0d6efd" : "",
                };
              }}
            >Me contacter</NavLink>            
          </Nav>
        </NavBar.Collapse>
      </Container>
    </NavBar>
  );
};

export default Navi;
