import { fetchApi } from 'components/services/api';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  const showMovies = async () => {
    const movies = await fetchApi();
    setMovies(movies);
    console.log(movies);
  };

  useEffect(() => {
    showMovies();
  }, []);

  return (
    <>
      <ul>
        {movies.map(item => (
          <li key={item.id}>{item.title ? item.title : item.name}</li>
        ))}
      </ul>
    </>
  );
};
