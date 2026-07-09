import React from "react";
import Navbar from "../components/Navbar";

function Movies() {
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
        <select id="filter" onChange={() => filterMovies(event)}>
          <option value="" disabled selected>
            Sort
          </option>
          <option value="OLD_TO_NEW">Year, Old to New</option>
          <option value="NEW_TO_OLD">Year, New to Old</option>
        </select>
      </div>
    </>
  );
}

export default Movies;
