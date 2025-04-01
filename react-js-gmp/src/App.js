import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import "./styles/styles.scss";
import fetchMovies from "./services/movieService";
import SearchForm from "./components/SearchForm";

export default function App() {
  const [search, setSearch] = useState("Comedy");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const genres = ["All", "Action", "Drama", "Comedy", "Horror"];

  useEffect(() => {
    fetchMovies(selectedGenre, "genres");
  }, [selectedGenre]);

  useEffect(() => {
    fetchMovies(search, "title");
  }, [search]);

  const handleSearch = (query) => {
    setSearch(query);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  return (
    <div>
      <h1>Movie Search</h1>
      <Counter initialValue={0}></Counter>
      <SearchForm initialValue={search} onSearch={handleSearch} />
      <GenreSelect
        genres={genres}
        selectedGenre={selectedGenre}
        onChange={handleGenreChange}
      />
      <p>Search: {search}</p>
      <p>Selected Genre: {selectedGenre}</p>
    </div>
  );
}
