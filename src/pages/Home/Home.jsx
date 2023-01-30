import { MoviesItem } from 'components/MoviesItem/MoviesItem';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getMovieTrendApi } from 'service/api';
// import PropTypes from 'prop-types'

export function Home(props) {
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
        <MoviesItem key={el.id} {...el} />
      ))}
    </ul>
  );
}

// Layout.propTypes = {}
