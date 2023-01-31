import PropTypes from 'prop-types';

export const ReviewsItem = ({ author, content }) => {
  return (
    <li>
      <h3 style={{ marginBottom: '10px' }}>{author}</h3>
      <p>{content}</p>
    </li>
  );
};

ReviewsItem.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};
