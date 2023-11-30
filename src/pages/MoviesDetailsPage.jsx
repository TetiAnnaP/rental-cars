import React, { useEffect, useRef, useState } from 'react';
import { getDetails } from '../components/services/services';
import { styled } from 'styled-components';
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom';
import Cast from 'components/Cast';
import Reviews from 'components/Reviews';
import { PropTypes } from 'prop-types';

const StyledPageWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
const StyledImgWrapper = styled.div`
  flex: 0 0 auto;
  margin-right: 20px;
`;
const StyledContentWrapper = styled.div`
  flex: 1 1 auto;
`;
const StyledList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  gap: 10px;
`;
const StyledAddWrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
  padding: 20px;
`;
const StyledLink = styled(Link)`
  display: block;
  padding-top: 20px;
  padding-left: 20px;
`;

const MoviesDetailsPage = () => {
  const [moviesById, setMoviesById] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const location = useLocation();
  const backLink = useRef(location.state?.from ?? '/');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getDetails(id);
        // console.log(res);
        setMoviesById(res);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  const imgPath = 'https://image.tmdb.org/t/p/w300';

  return (
    <div>
      <StyledLink to={backLink.current}> {'<--'} Go back</StyledLink>
      {error !== null && <h1>{error}</h1>}
      {moviesById.length !== 0 && (
        <>
          <StyledPageWrapper>
            <StyledImgWrapper>
              {moviesById.poster_path && (
                <img
                  src={imgPath + moviesById.poster_path}
                  alt={moviesById.title}
                />
              )}
            </StyledImgWrapper>
            <StyledContentWrapper>
              <h1>{moviesById.title}</h1>
              <h2>Overview</h2>
              <p>{moviesById.overview}</p>
              <h2>Genres</h2>
              <StyledList>
                {moviesById.genres &&
                  moviesById.genres.map((genre, index) => (
                    <li key={index}>{genre.name}</li>
                  ))}
              </StyledList>
            </StyledContentWrapper>
          </StyledPageWrapper>
          <StyledAddWrapper>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to="cast">Cast</Link>
              </li>
              <li>
                <Link to="reviews">Reviews</Link>
              </li>
            </ul>
            <Routes>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Routes>
          </StyledAddWrapper>
        </>
      )}
    </div>
  );
};

MoviesDetailsPage.propTypes = {
  error: PropTypes.bool,
  id: PropTypes.string,
  moviesById: PropTypes.objectOf({
    poster_path: PropTypes.img,
    title: PropTypes.string,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string,
      })
    ),
  }),
};

export default MoviesDetailsPage;
