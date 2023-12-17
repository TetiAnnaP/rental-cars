import css from './App.module.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage/HomePage';
import Catalog from '../../pages/Catalog';
import Favorites from '../../pages/Favorites';

export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Home
        </NavLink>
        <NavLink
          to="/catalog"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Catalog
        </NavLink>
        <NavLink
          to="/favorites"
          className={({ isActive }) => (isActive ? css.active : css.link)}
        >
          Favorites
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
  );
};
