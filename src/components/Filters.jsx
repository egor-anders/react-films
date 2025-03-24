import { useState } from 'react';

function Filters({ changeSearchType }) {
  const [type, setType] = useState('all');

  const handleChange = (e) => {
    setType(e.target.dataset.type);
    changeSearchType(e.target.dataset.type);
  };

  return (
    <div className='filters'>
      <label>
        <input
          className="with-gap"
          name="filters"
          type="radio"
          data-type="all"
          onChange={handleChange}
          checked={type === 'all'}
        />
        <span>All</span>
      </label>
      <label>
        <input
          className="with-gap"
          name="filters"
          type="radio"
          data-type="movie"
          onChange={handleChange}
          checked={type === 'movie'}
        />
        <span>Movies only</span>
      </label>
      <label>
        <input
          className="with-gap"
          name="filters"
          type="radio"
          data-type="series"
          onChange={handleChange}
          checked={type === 'series'}
        />
        <span>Series only</span>
      </label>
    </div>
  );
}

export default Filters;
