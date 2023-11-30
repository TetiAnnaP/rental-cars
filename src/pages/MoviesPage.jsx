import { getSearchMovie } from 'components/services/services';
import React, { useEffect, useState } from 'react';
import {
  Link,
  useSearchParams,
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { styled } from 'styled-components';
import MoviesDetailsPage from './MoviesDetailsPage';
import { PropTypes } from 'prop-types';

const StyledWrapper = styled.div`
  padding: 20px;
`;
const StyledInput = styled.input`
  margin-right: 10px;
  width: 300px;
`;

const MoviesPage = () => {
  const [searchList, setSearchList] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const userQuery = searchParams.get('query');
  const location = useLocation();

  const hamdleSubmit = e => {
    e.preventDefault();
    // console.dir(e.target.elements.userValue.value);
    const userValue = e.target.elements.userValue.value;
    setSearchParams({
      query: userValue,
    });
  };

  useEffect(() => {
    if (!userQuery) return;
    const fetchData = async () => {
      try {
        const res = await getSearchMovie(userQuery);
        setSearchList(res.results);
        // console.log(res.results);
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
  }, [userQuery]);

  return (
    <>
      <StyledWrapper>
        <form onSubmit={hamdleSubmit}>
          <StyledInput type="text" required name="userValue" />
          <button type="submit">Search</button>
        </form>
      </StyledWrapper>

      {searchList.length !== 0 && (
        <div>
          {error !== null && <h1>{error}</h1>}
          <ul>
            {searchList.map(arr => (
              <li key={arr.id}>
                <Link state={{ from: location }} to={`/movies/${arr.id}`}>
                  {arr.title}
                </Link>
              </li>
            ))}
          </ul>
          <Routes>
            <Route path="/movies/:id" element={<MoviesDetailsPage />} />
          </Routes>
        </div>
      )}
    </>
  );
};

MoviesPage.propTypes = {
  searchList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
    })
  ),
  error: PropTypes.bool,
};

export default MoviesPage;
