// import PropTypes from 'prop-types'
import css from './Movies.module.css';
import { BiSearch } from 'react-icons/bi';

export const Movies = () => {
  return (
    <div>
      <form className={css.formSubmit}>
        <input className={css.input} type="text" placeholder="Search" />
        <button className={css.button} type="submit">
          <BiSearch className={css.icon} />
        </button>
      </form>
    </div>
  );
};

// Layout.propTypes = {}
