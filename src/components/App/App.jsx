import css from './App.module.css';
import { NavLink, Routes, Route } from 'react-router-dom';
import HomePage from '../../pages/HomePage';
import Catalog from '../../pages/Catalog/Catalog';
import Favorites from '../../pages/Favorites';

export const App = () => {
  return (
    <div className={css.container}>
      <header className={css.header}>
        <NavLink className={css.link} to="/">
          Home
        </NavLink>
        <NavLink className={css.link} to="/catalog">
          Catalog
        </NavLink>
        <NavLink className={css.link} to="favorites">
          Favorites
        </NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/catalog" element={<Catalog />}></Route>
          <Route path="favorites" element={<Favorites />}></Route>
        </Routes>
      </main>
    </div>
  );
};
