import React, { useState } from "react";

const MovieTile = ({ movie = {}, onClick, onEdit, onDelete }) => {
  const [isContextMenuVisible, setContextMenuVisible] = useState(false);

  const handleClick = () => {
    if (onClick) {
      onClick(movie);
    }
  };

  const handleContextMenuClick = (action) => {
    setContextMenuVisible(false);
    if (action === "edit" && onEdit) {
      onEdit(movie);
    } else if (action === "delete" && onDelete) {
      onDelete(movie);
    }
  };

  const { imageUrl, name, releaseYear, genres } = movie;

  return (
    <div className="movie-tile" onClick={handleClick}>
      <img src={imageUrl} alt={name} className="movie-image" />
      <div className="movie-info">
        <h3>{name}</h3>
        <p>Release Year: {releaseYear}</p>
        <div className="movie-genres">
          {genres &&
            genres.map((genre, index) => (
              <span key={index} className="genre">
                {genre}
              </span>
            ))}
        </div>
      </div>
      <button
        className="context-menu-btn"
        onClick={(e) => {
          e.stopPropagation();
          setContextMenuVisible(!isContextMenuVisible);
        }}
      >
        &#8230; {/* Three dots button */}
      </button>
      {isContextMenuVisible && (
        <div className="context-menu">
          <ul>
            <li onClick={() => handleContextMenuClick("edit")}>Edit</li>
            <li onClick={() => handleContextMenuClick("delete")}>Delete</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieTile;
