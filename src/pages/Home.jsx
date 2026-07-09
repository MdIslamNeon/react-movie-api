import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import "../index.css";

// const apiKey = import.meta.env.VITE_MY_API_KEY;

function Home() {

  const [term, setTerm] = useState('');

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="search-container">
          <div className="search-container__input">
            <input
              className="search-input"
              type="text"
              placeholder="Search by Name"
              onChange={(event) => setTerm(event.target.value)}
              value={term}
            />
            <Link to={`/movies/${term}`}>
              <button className="loading">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
