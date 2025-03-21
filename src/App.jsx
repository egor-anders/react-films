import { useState } from 'react';
import './App.css';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Main from './layouts/Main';
import { useEffect } from 'react';

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('https://www.omdbapi.com/?s=game&apikey=436600bc')
      .then((response) => response.json())
      .then((json) => setMovies(json.Search));
  }, []);

  return (
    <div className="content">
      <Header />
      <Main movies={movies} />
      <Footer />
    </div>
  );
}

export default App;
