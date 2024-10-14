import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <h1>AIFA Ventures</h1>
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/signup">Sign Up</Link>
        <Link to="/awards">Awards</Link>
      </nav>
    </header>
  );
};

export default Header;
