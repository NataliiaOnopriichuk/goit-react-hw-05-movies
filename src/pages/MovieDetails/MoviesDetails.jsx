import { MoviesDetailsList } from 'components/MoviesDetailsList/MoviesDetailsList';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getMovieByIdApi } from 'service/api';

// import PropTypes from 'prop-types'

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [dataMovies, setDataMovies] = useState({});
  const [setError] = useState(null);

  useEffect(() => {
    if (!movieId) return;
    const getMovieById = async () => {
      const data = await getMovieByIdApi(movieId);
      console.log('data :>> ', data);
      setDataMovies(data);
    };
    getMovieById().catch(error => setError(error.message));
  }, [movieId, setError]);

  return (
    <>
      <MoviesDetailsList dataMovies={dataMovies} />
      <div>
        <NavLink to="cast">Акторський склад</NavLink>
        <NavLink to="reviews">Відгуки</NavLink>
      </div>
    </>
  );
};

// Layout.propTypes = {}
