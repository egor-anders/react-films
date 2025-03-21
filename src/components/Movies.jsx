import Movie from './Movie';

function Movies({ movies }) {
  return (
    <div className='cards-list'>
      {movies &&
        movies.map((movie) => <Movie key={movie.imdbID} movie={movie} />)}
    </div>
  );
}

export default Movies;
