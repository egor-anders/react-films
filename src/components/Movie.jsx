function Movie(props) {
  const {
    Title: title,
    Poster: poster,
    imdbID: id,
    Year: year,
    Type: type,
  } = props;
  return (
    <div id={id} className="card movie">
      <div className="card-image">
        {poster === "N/A" ? (
          <img src={`https://placehold.co/600x400?text=${title}`} />
        ) : (
          <img src={poster} />
        )}
      </div>
      <div className="card-content">
        <span className="card-title">{title}</span>
        <p>
          {year} <span className="right">{type}</span>
        </p>
      </div>
    </div>
  );
}

export default Movie;
