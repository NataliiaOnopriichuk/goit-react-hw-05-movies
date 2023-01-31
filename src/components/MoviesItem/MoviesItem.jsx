// import PropTypes from 'prop-types';

import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getMovieByIdApi } from 'service/api';

export const MoviesItem = ({ title, backdrop_path, id }) => {
  return (
    <li>
      <NavLink to={`movies/${id}`}>{title}</NavLink>
    </li>
  );
};
