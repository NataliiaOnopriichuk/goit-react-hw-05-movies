import PropTypes from 'prop-types';
import css from './MoviesListItem.module.css';
import { NavLink, useLocation } from 'react-router-dom';

export const MoviesListItem = ({ title, id }) => {
  const location = useLocation();

  return (
    <li>
      <NavLink
        className={css.link}
        state={{ from: location }}
        to={`/movies/${id}`}
      >
        {title}
      </NavLink>
    </li>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
