import React, { useEffect, useRef, useState } from "react";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import "./styles/styles.scss";
import SearchForm from "./components/SearchForm";
import MovieGrid from "./components/MovieGrid";
import { fetchMovies, moviesList } from "./services/movieService";

export default function App() {
  const [search, setSearch] = useState("Comedy");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [movies, setMovies] = useState([]);
  const genres = ["All", "Action", "Drama", "Comedy", "Horror"];
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fetchMoviesByGenre = async () => {
      await fetchMovies(selectedGenre, "genres");
      setMovies(moviesList);
    };
    fetchMoviesByGenre();
  }, [selectedGenre]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    const fetchMoviesByTitle = async () => {
      await fetchMovies(search, "title");
      setMovies(moviesList);
    };
    console.log("search by title", search);
    fetchMoviesByTitle();
  }, [search]);

  const handleSearch = (query) => {
    setSearch(query);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
  };

  const handleMovieClick = (id) => {
    console.log("Movie clicked with ID:", id);
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
      <MovieGrid movies={movies} onMovieClick={handleMovieClick} />
    </div>
  );
}
