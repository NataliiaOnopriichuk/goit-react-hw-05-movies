import { MoviesDetailsList } from 'components/MoviesDetailsList/MoviesDetailsList';
import css from './MoviesDetails.module.css';
import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';
import { getMovieByIdApi } from 'service/api';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [dataMovies, setDataMovies] = useState({});

  useEffect(() => {
    if (!movieId) return;
    const getMovieById = async () => {
      const data = await getMovieByIdApi(movieId);
      console.log('data :>> ', data);
      setDataMovies(data);
    };
    getMovieById().catch(error => console.error(error));
  }, [movieId]);

  return (
    <>
      {dataMovies && <MoviesDetailsList dataMovies={dataMovies} />}
      <div className={css.link}>
        <button>
          <NavLink to="cast">Cast</NavLink>
        </button>
        <button>
          <NavLink to="reviews">Reviews</NavLink>
        </button>
      </div>
    </>
  );
};
