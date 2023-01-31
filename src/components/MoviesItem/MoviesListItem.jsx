// import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

export const MoviesListItem = ({ title, id }) => {
  return (
    <li>
      <NavLink to={`${id}`}>{title}</NavLink>
    </li>
  );
};
// {`movies/${id}`}
