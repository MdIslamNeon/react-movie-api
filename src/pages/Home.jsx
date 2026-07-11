import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

function Home() {

  const [term, setTerm] = useState('');
  const navigate = useNavigate();

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
              onKeyPress={(event) => {
                if(event.key === 'Enter') {
                  navigate(`/movies/${term}`)
                }
              }}
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
