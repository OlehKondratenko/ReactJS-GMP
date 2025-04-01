import React from "react";

export default function GenreSelect({ genres, selectedGenre, onChange }) {
  return (
    <div className="genre-select">
      {genres.map((genre) => (
        <button
          key={genre}
          className={`genre-button ${
            selectedGenre === genre ? "selected" : ""
          }`}
          onClick={() => onChange(genre)}
        >
          {genre}
        </button>
      ))}
    </div>
  );
}
