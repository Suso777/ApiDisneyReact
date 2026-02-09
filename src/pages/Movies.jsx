import { useEffect, useState } from "react";
import api from "../api/axios";
import MoviesList from "../components/MoviesList";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    api.get("/movies")
      .then((res) => setMovies(res.data))
      .catch((err) => console.error("Error cargando películas:", err));
  }, []);

  return (
    <div>
      <h1>Películas</h1>
      <MoviesList movies={movies} />
    </div>
  );
}

export default Movies;