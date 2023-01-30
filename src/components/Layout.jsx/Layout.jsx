import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';
// import PropTypes from 'prop-types'

export const Layout = () => {
  return (
    <>
      <Navigation />
      <div>
        <Outlet />
      </div>
    </>
  );
};
