import { useState, useEffect } from 'react';
import Filters from '../components/Filters';
import Movies from '../components/Movies';
import Preloader from '../components/Preloader';
import Search from '../components/Search';

const API_KEY = import.meta.env.VITE_API_KEY

function Main() {
  const [movies, setMovies] = useState([]);
  const [searchTitle, setSearchTitle] = useState('game');
  const [searchType, setSearchType] = useState('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(
      `https://www.omdbapi.com/?apikey=${API_KEY}&s=${searchTitle}${
        searchType !== 'all' ? `&type=${searchType}` : ''
      }`
    )
      .then((response) => response.json())
      .then((json) => {
        setMovies(json.Search);
        setLoading(false);
      });
  }, [searchTitle, searchType]);

  const searchMovies = (text) => {
    setLoading(true);
    setSearchTitle(text);
  };
  const changeSearchType = (type) => {
    setLoading(true);
    setSearchType(type);
  };

  return (
    <main>
      <div className="container">
        <Search searchMovies={searchMovies} />
        <Filters changeSearchType={changeSearchType} />
        {loading ? (
          <Preloader />
        ) : (
          <>
            {searchTitle ? (
              <h1>
                Results for{' '}
                <span className=" teal-text text-darken-1">{searchTitle}</span>
              </h1>
            ) : (
              ''
            )}
            <Movies movies={movies} />
          </>
        )}
      </div>
    </main>
  );
}

export default Main;
