import { fetchApiCredits, IMG_URL } from 'services/api';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import css from './Cast.module.css';
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
            <li className={css.cast_item} key={item.id}>
              <img
                width="150"
                src={`${IMG_URL}${item.profile_path}`}
                alt={item.original_name}
              />
              <div className={css.cast_item_details}>
                <h3>{item.original_name}</h3>
                <p>Character: {item.character}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Cast;
