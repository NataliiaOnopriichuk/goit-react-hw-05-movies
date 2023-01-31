// import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import { MoviesListItem } from 'components/MoviesItem/MoviesListItem';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getMovieTrendApi } from 'service/api';
// import PropTypes from 'prop-types'

export const Home = () => {
  const [setError] = useState(null);
  const [dataMovies, setDataMovies] = useState([]);

  useEffect(() => {
    const getSearchedImages = async () => {
      const data = await getMovieTrendApi();
      setDataMovies([...data.results]);
    };
    getSearchedImages().catch(error => setError(error.message));
  }, [setError]);

  return (
    <ul>
      {dataMovies.map(el => (
        <MoviesListItem key={el.id} {...el} />
      ))}
    </ul>
  );
};

// Layout.propTypes = {}
