import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import css from './Home.module.css';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { getMovieTrendApi } from 'service/api';

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
    <ul className={css.list}>
      {dataMovies.length > 0 &&
        dataMovies.map(el => <MoviesListItem key={el.id} {...el} />)}
    </ul>
  );
};
