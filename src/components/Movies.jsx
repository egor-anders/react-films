import Movie from './Movie';

function Movies({ movies = [] }) {
  return (
    <>
      {movies.length ? (
        <div className="cards-list">
          {movies.map((movie) => (
            <Movie key={movie.imdbID} {...movie} />
          ))}
        </div>
      ) : (
        <h2>Nothing found</h2>
      )}
    </>
  );
}

export default Movies;
