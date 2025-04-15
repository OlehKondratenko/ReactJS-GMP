import React from "react";

const SearchForm = ({ initialValue = "Comedy", onSearch }) => {
  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(e.target.value);
    }
  };

  const handleSearchClick = () => {
    onSearch(initialValue);
  };

  return (
    <div className="search-form">
      <input
        type="text"
        className="search-input"
        value={initialValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
