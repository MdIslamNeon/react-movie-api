import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const apiKey = import.meta.env.VITE_MY_API_KEY;

function MovieInfo() {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState({});

  async function fetchMovie() {
    const { data } = await axios.get(
      `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbID}`,
    );
    setMovie(data);
  }

  useEffect(() => {
    fetchMovie();
  }, []);

  return (
    <div className="movie-info">
      <img
        className="movie-info__poster"
        src={movie.Poster}
        alt={`${movie.Title} poster`}
      />
      <div className="movie-info__details">
        <h1>
          {movie.Title} <span>({movie.Year})</span>
        </h1>
        <p className="movie-info__meta">
          {movie.Rated} • {movie.Runtime} • {movie.Genre}
        </p>
        <p>{movie.Plot}</p>
        <p>
          <b>Director:</b> {movie.Director}
        </p>
        <p>
          <b>Cast:</b> {movie.Actors}
        </p>
        <p>
          <b>IMDb:</b> {movie.imdbRating}
        </p>
      </div>
    </div>
  );
}

export default MovieInfo;
