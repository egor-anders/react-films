import { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Preloader from "../components/Preloader";
import Search from "../components/Search";

function Main() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?s=game&apikey=436600bc`)
      .then((response) => response.json())
      .then((json) => setMovies(json.Search));
  }, []);

  const handleChangeSearchRequest = (str) => {
    fetch(`https://www.omdbapi.com/?s=${str}&apikey=436600bc`)
      .then((response) => response.json())
      .then((json) => setMovies(json.Search));
  };

  return (
    <main>
      <div className="container">
        <Search changeSearchRequest={handleChangeSearchRequest} />
        {movies.length ? <Movies movies={movies} /> : <Preloader />}
      </div>
    </main>
  );
}

export default Main;
