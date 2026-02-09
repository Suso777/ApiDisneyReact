import "./MoviesList.css";

function MoviesList({ movies }) {
  return (
    <div className="movies-grid">
      {movies.map((movie) => (
        <div key={movie._id} className="movie-card">
          <img src={movie.imageUrl} alt={movie.name} />
          <h3>{movie.name}</h3>
        </div>
      ))}
    </div>
  );
}

export default MoviesList;