import { fetchApiCredits } from 'services/api';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import CastItem from 'components/CastItem/CastItem';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  const showCast = async () => {
    const castArr = await fetchApiCredits(movieId);
    setCast(castArr);
  };

  useEffect(() => {
    showCast();
    // eslint-disable-next-line
  }, [movieId]);

  return (
    <>
      <section>
        <ul>
          {cast.map(item => (
            <CastItem
              key={item.id}
              photo={item.profile_path}
              alt={item.original_name}
              character={item.character}
            ></CastItem>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Cast;
