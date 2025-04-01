import React, { useEffect } from "react";

const SearchForm = ({ initialValue, onSearch }) => {
  useEffect(() => {
    onSearch(initialValue);
  }, [initialValue, onSearch]);

  const handleInputChange = (e) => {
    onSearch(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      onSearch(e.target.value);
    }
  };

  const handleFocus = () => {
    onSearch(initialValue);
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
        onFocus={handleFocus}
      />
      <button className="search-button" onClick={handleSearchClick}>
        Search
      </button>
    </div>
  );
};

export default SearchForm;
