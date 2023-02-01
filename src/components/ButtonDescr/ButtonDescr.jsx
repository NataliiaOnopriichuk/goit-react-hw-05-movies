import css from './ButtonDescr.module.css';
import { NavLink } from 'react-router-dom';
import clsx from 'clsx';

export const ButtonDescr = () => {
  return (
    <>
      <div className={css.inner}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.activeLink)
          }
          to="cast"
        >
          Cast
        </NavLink>
        <NavLink
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
