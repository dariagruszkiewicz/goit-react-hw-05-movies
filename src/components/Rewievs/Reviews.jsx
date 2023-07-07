import { fetchApiRewievs } from 'components/services/api';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const Reviews = () => {
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
    <>
      <section>
        <ul>
          {reviews === []
            ? reviews.map(item => (
                <li key={item.id}>
                  <h3>Author: {item.author}</h3>
                  <p> {item.content}</p>
                </li>
              ))
            : `We don't have any reviews for this movie`}
        </ul>
      </section>
    </>
  );
};
