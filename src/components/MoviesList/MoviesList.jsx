import css from './MoviesList.module.css';
import { MoviesListItem } from 'components/MoviesListItem/MoviesListItem';
import PropTypes from 'prop-types';

export const MoviesList = ({ dataMovies }) => {
  return (
    <ul className={css.list}>
      {dataMovies &&
        dataMovies.map(el => <MoviesListItem key={el.id} {...el} />)}
    </ul>
  );
};

MoviesList.propTypes = {
  dataMovies: PropTypes.array.isRequired,
};
