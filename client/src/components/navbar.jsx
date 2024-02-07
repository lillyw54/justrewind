// Navbar.jsx

import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/movies">Movies</Link>
      </div>
      <div>
        <Link to="/search">Search</Link>
      </div>
      <div>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
