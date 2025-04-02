import React from "react";
import MovieTile from "./MovieTile";

const MovieGrid = ({ movies, onMovieClick }) => {
  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieTile
          key={movie.id}
          id={movie.id}
          imageUrl={movie.poster_path}
          name={movie.title}
          releaseYear={movie.release_date}
          genres={movie.genres}
          onClick={(id) => onMovieClick(id)}
        />
      ))}
    </div>
  );
};

export default MovieGrid;
