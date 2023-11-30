import { getTrendingMovies } from 'components/services/services';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PropTypes } from 'prop-types';

const HomePage = ({ getTrenDingMovieTitle }) => {
  const [trendingMoviesList, setTrendingMoviesList] = useState([]);
  const [error, setError] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMovies();
        // console.log(data);
        setTrendingMoviesList(data);
      } catch (error) {
        // console.log(error.message);
        setError(error.massage);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error !== null && <h1>Error</h1>}
      <h1>Trending today</h1>
      <ul>
        {trendingMoviesList.map(movie => (
          <li key={movie.id}>
            <Link
              state={{ from: location }}
              to={`/movies/${movie.id}`}
              data-id={movie.id}
            >
              {movie.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

HomePage.propTypes = {
  trendingMoviesList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
};

export default HomePage;
