import React from "react";
import "../index.css";

function Navbar() {
  return (
    <>
      <header className="site-header">
        <div className="header-container">
          <a href="#" className="logo">
            OMDb API
          </a>
          <nav className="nav-menu">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              Find your movie
            </a>
            <a href="#" className="btn-contact">
              Contact
            </a>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
