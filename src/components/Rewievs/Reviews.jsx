import { fetchApiRewievs } from 'services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import ReviewsItem from 'components/ReviewsItem/ReviewsItem';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  const showReviews = async () => {
    const reviewsArr = await fetchApiRewievs(movieId);
    setReviews(reviewsArr);
  };

  useEffect(() => {
    showReviews();
    // eslint-disable-next-line
  }, [movieId]);

  return (
    <section>
      <ul>
        {reviews.length > 0 ? (
          reviews.map(item => (
            <ReviewsItem
              key={item.id}
              author={item.author}
              content={item.content}
            ></ReviewsItem>
          ))
        ) : (
          <p>We don't have any reviews for this movie</p>
        )}
      </ul>
    </section>
  );
};

export default Reviews;
