import { useEffect } from 'react';
import { useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieByIdApi } from 'service/api';

// import PropTypes from 'prop-types'

export const MoviesDetails = () => {
  const { movieId } = useParams();

  const [dataMovies, setDataMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getMovieById = async () => {
      const data = await getMovieByIdApi(movieId);
      console.log('data :>> ', data);
      setDataMovies([...data]);
    };
    getMovieById().catch(error => setError(error.message));
  }, [movieId]);
  return (
    <>
      {console.log('dataMovies', dataMovies)}
      {dataMovies.map(({ title }) => (
        <p>{title}</p>
      ))}
      <div>
        <Outlet />
        <NavLink to="cast">Акторський склад</NavLink>
        <NavLink to="reviews">Відгуки</NavLink>
      </div>
    </>
  );
};

// Layout.propTypes = {}
