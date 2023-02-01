import css from './ButtonDescr.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import clsx from 'clsx';

export const ButtonDescr = () => {
  const location = useLocation();

  return (
    <>
      <div className={css.inner}>
        <NavLink
          state={{ from: location }}
          className={({ isActive }) =>
            clsx(css.link, isActive && css.activeLink)
          }
          to="cast"
        >
          Cast
        </NavLink>
        <NavLink
          state={{ from: location }}
          className={({ isActive }) =>
            clsx(css.link, isActive && css.activeLink)
          }
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
    </>
  );
};
