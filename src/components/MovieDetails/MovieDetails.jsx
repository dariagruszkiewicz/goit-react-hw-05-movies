import { fetchApiDetails } from 'components/services/api';
import { useEffect, useState } from 'react';

export const MovieDetails = ({ id }) => {
  const [movieDetails, setMovieDetails] = useState(null);

  const showMovieDetails = async id => {
    const details = await fetchApiDetails(id);
    setMovieDetails(details);
  };

  useEffect(() => {
    showMovieDetails();
  }, [movieDetails]);

  return (
    <>
      <div>
        <p>coś tam</p>
      </div>
    </>
  );
};
