import { fetchApiDetails, IMG_URL } from 'services/api';
import { useEffect, useState } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import css from './MovieDetails.module.css';
import BackLink from 'components/BackLink/Backlink';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const location = useLocation();
  const backLinkHref = location.state?.from ?? '/';

  const showMovieDetails = async () => {
    const details = await fetchApiDetails(movieId);
    setMovieDetails(details);
  };

  useEffect(() => {
    showMovieDetails();
    // eslint-disable-next-line
  }, []);

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movieDetails;
  return (
    <>
      <BackLink to={backLinkHref}>Go back</BackLink>
      <div className={css.movie_card}>
        <div>
          <img src={`${IMG_URL}/${poster_path}`} alt={title} />
        </div>
        <div>
          <h2>
            {title} ({release_date ? release_date.slice(0, 4) : ''})
          </h2>
          <p>User score: {vote_average}%</p>
          <h3>Overwiev</h3>
          <p>{overview}</p>
          <h4>Genres</h4>
          <p>{genres ? genres.map(item => item.name).join(', ') : ''}</p>
        </div>
      </div>
      <div className={css.movie_additional}>
        <p>Additional information</p>
        <Link to="cast" className={css.link}>
          Cast
        </Link>
        <Link to="reviews" className={css.link}>
          Reviews
        </Link>
      </div>
      <Outlet />
    </>
  );
};
export default MovieDetails;
