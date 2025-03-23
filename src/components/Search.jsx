import { useState } from "react";

function Search({changeSearchRequest}) {
  const [search, setSearch] = useState("");

  return (
    <div className="input-field search inline">
      <input
        onChange={(e) => setSearch(e.target.value)}
        id="search_inline"
        type="search"
        className="validate"
        placeholder="search"
      />
      <button className="btn waves-effect waves-light" onClick={() => changeSearchRequest(search)} type="button" name="action">
        search
      </button>
    </div>
  );
}

export default Search;
