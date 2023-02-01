import css from './Header.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const Header = () => {
  return (
    <nav className={css.nav}>
      <ul className={css.navList}>
        <li className={css.navItem}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.navLink, isActive && css.activeLink)
            }
            to="/"
          >
            Home
          </NavLink>
        </li>
        <li className={css.navItem}>
          <NavLink
            className={({ isActive }) =>
              clsx(css.navLink, isActive && css.activeLink)
            }
            to="/movies"
          >
            Movies
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
