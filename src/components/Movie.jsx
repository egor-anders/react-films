function Movie({ movie }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={movie.Poster} />
      </div>
      <div className="card-content">
        <span className="card-title">{movie.Title}</span>
        <p>{movie.Year}</p>
      </div>
    </div>
  );
}

export default Movie;
