import css from './Movies.module.css';
import { useState } from 'react';
import { fetchApiByQuery } from 'components/services/api';
import { Link } from 'react-router-dom';

export const Movies = () => {
  const [searchValue, setSearchValue] = useState('');
  const [movies, setMovies] = useState([]);

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
            <Link to={`/movies/${item.id}`}>
              {item.title ? item.title : item.name}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};
