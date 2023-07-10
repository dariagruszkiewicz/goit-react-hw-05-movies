import { IMG_URL } from 'services/api';
import css from './CastItem.module.css';
import { PropTypes } from 'prop-types';

const CastItem = ({ photo, alt, character }) => {
  return (
    <>
      <li className={css.cast_item}>
        <img width="150" src={`${IMG_URL}${photo}`} alt={alt} />
        <div className={css.cast_item_details}>
          <h3>{alt}</h3>
          <p>Character: {character}</p>
        </div>
      </li>
    </>
  );
};

CastItem.propTypes = {
  photo: PropTypes.string,
  alt: PropTypes.string,
  character: PropTypes.string,
};

export default CastItem;
