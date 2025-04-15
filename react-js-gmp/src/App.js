import React, { useState } from "react";
import Counter from "./components/Counter";
import GenreSelect from "./components/GenreSelect";
import "./styles/styles.scss";
import SearchForm from "./components/SearchForm";
import MovieGrid from "./components/MovieGrid";
import { moviesMock } from "./mock/moviesMock";
import MovieDetails from "./components/MovieDetails";
// import { fetchMovies, moviesList } from "./services/movieService";

export default function App() {
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const [movies, setMovies] = useState([]);
  const genres = ["All", "Action", "Drama", "Comedy", "Horror", "Romance"];
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleSearch = (query) => {
    setSearch(query);
    if (query === "") {
      setMovies(moviesMock);
    }
    const filteredMovies = moviesMock.filter((m) => m.title.includes(query));
    setMovies(filteredMovies);
  };

  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    if (genre === "All") {
      setMovies(moviesMock);
      return;
    }
    const filteredMovies = moviesMock.filter((m) => m.genres.includes(genre));
    setMovies(filteredMovies);
  };

  const handleMovieClick = (id) => {
    setSelectedMovie(moviesMock.find((m) => m.id === id));
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
      {selectedMovie && (
        <MovieDetails
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
}
