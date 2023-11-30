import { NavLink, Routes, Route } from 'react-router-dom';
import { styled } from 'styled-components';
import HomePage from 'pages/HomePage';
import Catalog from 'pages/Catalog';
import Favorites from 'pages/Favorites';

const StyledWrapper = styled.div`
  padding: 128px 128px 150px 128px;
  font-family: 'Manrope', sans-serif;
`;
const StyledHeader = styled.header`
  display: flex;
  gap: 20px;
`;
const StylesNavLink = styled(NavLink)`
  font-weight: 500;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  color: #121417;

  &.active {
    color: #3470ff;
  }
`;

export const App = () => {
  return (
    <StyledWrapper>
      <StyledHeader>
        <StylesNavLink to="/">Home</StylesNavLink>
        <StylesNavLink to="/catalog">Catalog</StylesNavLink>
        <StylesNavLink to="favorites">Favorites</StylesNavLink>
      </StyledHeader>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </StyledWrapper>
  );
};
