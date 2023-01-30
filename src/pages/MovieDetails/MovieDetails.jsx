// import React, { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';

// import PropTypes from 'prop-types'

export const MoviesDetails = () => {
  const { movieId } = useParams();
  console.log('params :>> ', movieId);
  return (
    <div>
      <NavLink to="cast">Акторський склад</NavLink>
      <NavLink to="reviews">Відгуки</NavLink>
      <Outlet />
    </div>
  );
};

// Layout.propTypes = {}
