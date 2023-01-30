import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

// import PropTypes from 'prop-types'

export const Movies = () => {
  return (
    <div>
      <NavLink to="movieId">MoviesDetails</NavLink>
      <Outlet />
    </div>
  );
};

// Layout.propTypes = {}
