import React from "react";

const MovieDetails = ({ movie = {}, onClose }) => {
  const { poster_path, title, release_date, vote_average, runtime, overview } = movie;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <img src={poster_path} alt={title} className="movie-image" />

        <h2>{title}</h2>
        <p>Release Date: {release_date}</p>
        <p>Rating: {vote_average}</p>
        <p>Duration:{runtime}</p>
        <p>Description: {overview}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
