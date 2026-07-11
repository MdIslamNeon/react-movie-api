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
            <a href="/" className="nav-link">
              Home
            </a>
            <a href="/" className="nav-link">
              Find your movie
            </a>
            <a href="/" className="btn-contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
