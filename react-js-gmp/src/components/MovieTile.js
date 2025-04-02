import React, { useState } from "react";

const MovieTile = ({ imageUrl, name, releaseYear, genres, onClick, id }) => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenuToggle = (e) => {
    e.stopPropagation();
    setShowMenu((prevState) => !prevState);
  };

  const handleEdit = () => {
    console.log("Edit clicked for", name);
  };

  const handleDelete = () => {
    console.log("Delete clicked for", name);
  };

  return (
    <div className="movie-tile" onClick={() => onClick(id)}>
      <img src={imageUrl} alt={name} className="movie-image" />
      <h3>{name}</h3>
      <p>{releaseYear}</p>
      <p>{genres.join(", ")}</p>
      <div className="context-menu" onClick={handleMenuToggle}>
        <span>...</span>
        {showMenu && (
          <div className="context-menu-popup">
            <button onClick={handleEdit}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieTile;
