import useFetch from "../hooks/useFetch";
import Loader from "../components/Loader";
import ErrorMessage from "../components/ErrorMessage";

export default function Movies() {
  const { data, loading, error } = useFetch("http://localhost:3000/movies");

  if (loading) return <Loader />;
  if (error) return <ErrorMessage message={error} />;

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Movies</h1>
      <ul>
        {data.map(movie => (
          <li key={movie.id}>
            {movie.title} — ⭐ {movie.rating}
          </li>
        ))}
      </ul>
    </div>
  );
}