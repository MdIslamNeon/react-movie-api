import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const apiKey = import.meta.env.VITE_MY_API_KEY;

function Movies() {
  const { searchItem } = useParams();
  const [movies, setMovies] = useState([]);

  async function fetchAllMovies() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchItem}`,
    );
    setMovies(data.Search);
  }

  useEffect(() => {
    fetchAllMovies();
  }, []);

  function filterMovies(filter) {
    if (filter === "OLD_TO_NEW") {
      movies.sort((a, b) => a.Year - b.Year);
    } else if (filter === "NEW_TO_OLD") {
      movies.sort((a, b) => b.Year - a.Year);
    }
  }

  return (
    <>
      <Navbar />
      <div className="movies-banner">
        <h2>Movies</h2>
        <select
          id="filter"
          defaultValue=""
          onChange={() => filterMovies(event)}
        >
          <option value="" disabled>
            Sort
          </option>
          <option value="OLD_TO_NEW">Year, Old to New</option>
          <option value="NEW_TO_OLD">Year, New to Old</option>
        </select>
      </div>
      <div className="movies-grid">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.imdbID}`} className="link-movie-info" key={movie.imdbID}>
            <div className="user-card">
              <div className="user-card__container">
                <img
                  src={movie.Poster}
                  alt="${movie.Title} poster"
                  className="poster"
                />
                <h3>{movie.Title}</h3>
                <p>
                  <b>Year:</b> {movie.Year}
                </p>
                <p>
                  <b>Type:</b> {movie.Type}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Movies;
