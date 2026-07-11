import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <Link to='/' className="logo">  
              OMDb Movies
          </Link>
          <nav className="nav-menu">
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/" className="nav-link">
              Find your movie
            </Link>
            <Link to="/" className="nav-link">
              Contact
            </Link>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
