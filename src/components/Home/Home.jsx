import { fetchApi } from 'components/services/api';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
        <h1>Trending today</h1>
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
