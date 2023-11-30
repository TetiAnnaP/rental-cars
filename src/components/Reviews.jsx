import React, { useEffect, useState } from 'react';
import { getReviews } from './services/services';
import { useParams } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const Reviews = () => {
  const [userReviews, setUserReviews] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getReviews(id);
        // console.log(res);
        setUserReviews(res);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {error !== null && <h1>Error</h1>}
      {userReviews.length === 0 && (
        <h3>We don`t have any reviews for this movie</h3>
      )}
      <ul>
        {userReviews.map(review => (
          <li key={review.id}>
            <h3>Author: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Reviews.propTypes = {
  userReviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      author: PropTypes.string,
      content: PropTypes.string,
    })
  ),
};

export default Reviews;
