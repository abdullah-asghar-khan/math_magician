import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h1>Math Magicians</h1>
    <div className="desktop-nav">
      <Link to="/" className="link">Home</Link>
      <Link to="/calculator" className="link">Calculator</Link>
      <Link to="/quotes" className="link">Quotes</Link>
    </div>
  </nav>
);

export default Navbar;