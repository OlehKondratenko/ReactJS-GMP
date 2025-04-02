import React from 'react';

const SortControl = ({ currentSelection, onSortChange }) => {
  const handleChange = (event) => {
    onSortChange(event.target.value);
  };

  return (
    <div className="sort-control">
      <label htmlFor="sortSelect">Sort by:</label>
      <select
        id="sortSelect"
        value={currentSelection}
        onChange={handleChange}
        aria-label="Sort by"
      >
        <option value="releaseDate">Release Date</option>
        <option value="title">Title</option>
      </select>
    </div>
  );
};

export default SortControl;
