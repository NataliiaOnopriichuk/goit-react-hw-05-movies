import PropTypes from 'prop-types';
import css from './Section.module.css';

export const Section = ({ children }) => {
  return (
    <section>
      <div className={css.container}>{children}</div>
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
};
