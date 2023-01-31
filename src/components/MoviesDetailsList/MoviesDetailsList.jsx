import PropTypes from 'prop-types';
import React from 'react';
import css from './MoviesDetailsList.module.css';

export const MoviesDetailsList = ({ dataMovies }) => {
  const { poster_path, title, release_date, overview, vote_average, genres } =
    dataMovies;

  const movieYear = new Date(Date.parse(release_date));

  return (
    <div className={css.wrapper}>
      <div className={css.thumb}>
        <img
          className={css.imgPoster}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />
      </div>
      <div className={css.inner}>
        <h1 className={css.title}>
          {title} {`(${movieYear.getFullYear()})`}
          {/* .getTime().getFullYear() */}
        </h1>
        <h2 className={css.subTitle}>Genres</h2>
        <ul className={css.list}>
          {genres && genres.map(({ name, id }) => <li key={id}>{name}</li>)}
        </ul>
        <h2 className={css.subTitle}>Overview</h2>
        <p>{overview}</p>
        <p>Rating: {vote_average}</p>
      </div>
    </div>
  );
};

MoviesDetailsList.propTypes = {
  dataMovies: PropTypes.object.isRequired,
};
