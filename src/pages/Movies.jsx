import { useEffect, useState } from "react";
import api from "../api/axios";
import MoviesList from "../components/MoviesList";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api
      .get("/character") // Endpoint real de la API pública
      .then((res) => {
        setMovies(res.data.data); // La API devuelve los datos dentro de "data.data"
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error cargando personajes:", err);
        setError("No se pudieron cargar los personajes");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div>
      <h1>Personajes Disney</h1>
      <MoviesList movies={movies} />
    </div>
  );
}

export default Movies;