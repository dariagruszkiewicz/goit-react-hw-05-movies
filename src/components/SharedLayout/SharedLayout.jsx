import css from './SharedLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <nav className={css.navigation}>
        <NavLink to="/" className={css.navigation_item}>
          Home
        </NavLink>
        <NavLink to="/movies" className={css.navigation_item}>
          Movies
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
};
