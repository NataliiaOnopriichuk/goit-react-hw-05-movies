import { Navigation } from 'components/Navigation/Navigation';
import React from 'react';
import { Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <>
      <Navigation />
      <div style={{ padding: '30px 20px' }}>
        <Outlet />
      </div>
    </>
  );
};
