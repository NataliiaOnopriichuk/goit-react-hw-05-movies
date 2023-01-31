import { MoviesDetailsList } from 'components/MoviesDetailsList/MoviesDetailsList';
import css from './MoviesDetails.module.css';
import { useEffect, useState } from 'react';
import { NavLink, Outlet, useParams } from 'react-router-dom';
import { getMovieByIdApi } from 'service/api';
import clsx from 'clsx';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [dataMovies, setDataMovies] = useState({});

  useEffect(() => {
    if (!movieId) return;
    const getMovieById = async () => {
      const data = await getMovieByIdApi(movieId);
      setDataMovies(data);
    };
    getMovieById().catch(error => console.error(error));
  }, [movieId]);

  return (
    <>
      {dataMovies && <MoviesDetailsList dataMovies={dataMovies} />}
      <div className={css.inner}>
        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.activeLink)
          }
          to="cast"
        >
          Cast
        </NavLink>

        <NavLink
          className={({ isActive }) =>
            clsx(css.link, isActive && css.activeLink)
          }
          to="reviews"
        >
          Reviews
        </NavLink>
      </div>
      <Outlet />
    </>
  );
};
