import PropTypes from 'prop-types';
import React from 'react';
import css from './MoviesDetailsList.module.css';
import { BsArrowLeftShort } from 'react-icons/bs';

export const MoviesDetailsList = ({ dataMovies }) => {
  const { poster_path, title, release_date, overview, vote_average, genres } =
    dataMovies;

  const movieYear = new Date(Date.parse(release_date));

  return (
    <>
      <button className={css.btn}>
        <BsArrowLeftShort />
        Go back
      </button>
      <div className={css.wrapper}>
        <div className={css.thumb}>
          {poster_path && (
            <img
              className={css.imgPoster}
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
            />
          )}
        </div>
        <div className={css.inner}>
          <h1 className={css.title}>
            {title} {`(${movieYear.getFullYear()})`}
          </h1>
          <p>Rating: {vote_average}</p>
          <h2 className={css.subTitle}>Overview</h2>
          <p>{overview}</p>
          <h2 className={css.subTitle}>Genres</h2>
          <ul className={css.list}>
            {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
          </ul>
        </div>
      </div>
    </>
  );
};

MoviesDetailsList.propTypes = {
  dataMovies: PropTypes.object.isRequired,
};
