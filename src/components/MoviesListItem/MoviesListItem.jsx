import PropTypes from 'prop-types';
import css from './MoviesListItem.module.css';
import { NavLink } from 'react-router-dom';

export const MoviesListItem = ({ title, id }) => {
  return (
    <li>
      <NavLink className={css.link} to={`/movies/${id}`}>
        {title}
      </NavLink>
    </li>
  );
};

MoviesListItem.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
