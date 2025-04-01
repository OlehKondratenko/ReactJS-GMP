const fetchMovies = async (query = "", searchBy = "title") => {
  try {
    const queryParam = query ? `query=${query}` : "";
    const searchByParam = `searchBy=${searchBy}`;
    const separator = query ? "&" : "";
    const response = await fetch(
      `http://localhost:4000/movies?${queryParam}${separator}${searchByParam}`
    );
    const data = await response.json();
    console.log("Movies:", data);
    return data;
  } catch (error) {
    console.error("Error fetching movies:", error);
  }
};

export default fetchMovies;
