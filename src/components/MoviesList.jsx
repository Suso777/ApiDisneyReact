import "./MoviesList.css";
function MoviesList({ movies }) {
  return (
    <ul className="movies-grid">
      {movies.map((movie) => (
        <li key={movie._id}>{movie.name}</li>
      ))}
    </ul>
  );
}

export default MoviesList;