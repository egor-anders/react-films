import { useState } from "react";

function Search({searchMovies}) {
  const [search, setSearch] = useState("");
  const [disabled, setDisabled] = useState(true);

  const handleKey = (e) => {
    if (e.key == 'Enter') {
      searchMovies(search)
      setSearch('')
      setDisabled(true)
    }
  }

  const handleInput = (e) => {
    setSearch(e.target.value)


    if (e.target.value != '') {
      setDisabled(false)
    }
    else {
      setDisabled(true)
    }
  }

  const handleSubmit = () => {
      searchMovies(search)
      setSearch('')
      setDisabled(true)
  }

  return (
    <div className="input-field search inline">
      <input
        onChange={handleInput}
        id="search_inline"
        type="search"
        value={search}
        className="validate"
        placeholder="search"
        onKeyDown={handleKey}
      />
      <button className="btn waves-effect waves-light" disabled={disabled} onClick={handleSubmit} type="button" name="action">
        search
      </button>
    </div>
  );
}

export default Search;
