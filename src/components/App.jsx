import { Suspense, lazy } from 'react';
import { ColorRing } from 'react-loader-spinner';
import { NavLink, Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';

const HomePage = lazy(() => import('pages/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage'));
const MoviesDetailsPage = lazy(() => import('pages/MoviesDetailsPage'));
const NotFound = lazy(() => import('pages/NotFound'));

const StyledHeader = styled.header`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px,
    rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
`;
const StyledNavLink = styled(NavLink)`
  display: inline-block;
  font-size: 30px;
  text-decoration: none;
  color: black;
  margin-right: 20px;

  &.active {
    color: red;
  }
`;

export const App = () => {
  return (
    <div>
      <StyledHeader>
        <nav>
          <StyledNavLink to="/">Home</StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </nav>
      </StyledHeader>
      <main>
        <Suspense
          fallback={
            <ColorRing
              visible={true}
              height="80"
              width="80"
              ariaLabel="blocks-loading"
              wrapperStyle={{}}
              wrapperClass="blocks-wrapper"
              colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />
          }
        >
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/movies/*" element={<MoviesPage />}></Route>
            <Route path="/movies/:id/*" element={<MoviesDetailsPage />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </Suspense>
      </main>
    </div>
  );
};
