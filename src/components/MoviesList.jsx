function MoviesList({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie._id}>{movie.name}</li>
      ))}
    </ul>
  );
}

export default MoviesList;