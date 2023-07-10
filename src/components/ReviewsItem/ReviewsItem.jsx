import { PropTypes } from 'prop-types';

const ReviewsItem = ({ author, content }) => {
  return (
    <>
      <h3>Author: {author}</h3>
      <p>{content}</p>
    </>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,
};

export default ReviewsItem;
