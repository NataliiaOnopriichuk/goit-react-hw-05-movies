import PropTypes from 'prop-types';
import css from './CastItems.module.css';

export const CastItems = ({ name, character, profile_path }) => {
  return (
    profile_path !== null && (
      <li className={css.inner}>
        <div className={css.thumb}>
          <img
            className={css.imgProfile}
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
          />
        </div>
        <h2 className={css.title}>{name}</h2>
        <h3 className={css.subTitle}>{character}</h3>
      </li>
    )
  );
};

CastItems.propTypes = {
  name: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  profile_path: PropTypes.string,
};
