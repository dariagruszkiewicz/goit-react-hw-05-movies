import css from './Movies.module.css';
import { useState } from 'react';
import { fetchApiByQuery } from 'services/api';
import { Link, useLocation } from 'react-router-dom';

const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);
  const location = useLocation();

  const onChangeInput = e => {
    setSearchValue(e.target.value);
  };

  const handleClickButton = async e => {
    e.preventDefault();
    const moviesByQuery = await fetchApiByQuery(searchValue);
    setSearchValue(searchValue);
    console.log(moviesByQuery);
    setMovies(moviesByQuery);

    setSearchValue('');
  };

  return (
    <>
      <form onSubmit={handleClickButton}>
        <input
          className={css.input}
          type="text"
          onChange={onChangeInput}
          value={searchValue}
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {movies.map(item => (
          <li key={item.id}>
            <Link to={`/movies/${item.id}`} state={{ from: location }}>
              {item.title ? item.title : item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Movies;
