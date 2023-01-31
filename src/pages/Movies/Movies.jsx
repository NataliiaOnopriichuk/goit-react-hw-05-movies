import React, { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieByIdApi } from 'service/api';

// import PropTypes from 'prop-types'

export const Movies = ({ title, backdrop_path, id }) => {
  // const [dataMovies, setDataMovies] = useState([]);
  // const [error, setError] = useState(null);

  // useEffect(() => {
  //   const getMovieById = async () => {
  //     const data = await getMovieByIdApi(id);
  //     console.log('data :>> ', data);
  //     setDataMovies([...data.results]);
  //   };
  //   getMovieById().catch(error => setError(error.message));
  // }, [id, setError]);

  return (
    <div>
      <li>{/* <NavLink to={`${id}`}>{title}</NavLink> */}</li>
      <Outlet />
    </div>
  );
};

// Layout.propTypes = {}
