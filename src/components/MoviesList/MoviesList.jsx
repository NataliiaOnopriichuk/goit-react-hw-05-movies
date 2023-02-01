import css from './MoviesList.module.css';
import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import { useEffect, useState } from 'react';
import { getMovieByNameApi } from 'service/api';
import { useSearchParams } from 'react-router-dom';

export const MoviesList = () => {
  const [dataMovies, setDataMovies] = useState({});
  const [search] = useSearchParams();

  const query = search.get('query');

  useEffect(() => {
    if (!query) return;
    const MovieByName = async () => {
      const data = await getMovieByNameApi(query);
      setDataMovies(data.results);
    };
    MovieByName().catch(error => console.error(error));
  }, [query]);

  return (
    <ul className={css.list}>
      {dataMovies.length > 0 &&
        dataMovies.map(el => <MoviesListItem key={el.id} {...el} />)}
    </ul>
  );
};
