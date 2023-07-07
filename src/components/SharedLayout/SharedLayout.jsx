import css from './SharedLayout.module.css';
import { NavLink, Outlet } from 'react-router-dom';
import { styled } from 'styled-components';

export const SharedLayout = () => {
  const StyledLink = styled(NavLink)`
  padding: 10px;
  text-decoration: none;
}

    &.active {
      color: red;
    }
  `;
  return (
    <>
      <nav className={css.navigation}>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </nav>
      <Outlet />
    </>
  );
};
