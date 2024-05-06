import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <header>
      <p>JOHN DOE</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
          <li>
            <Link to="/realisations">Réalisations</Link>
          </li>
          <li>
            <Link to="/contacts">Me contacter</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
