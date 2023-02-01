import { Loader } from 'components/Loader/Loader';
import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import { Section } from 'components/Section/Section';
import { useFetchData } from 'hooks/useFetchData';
import { useParams } from 'react-router-dom';
import { getReviewsMoviesApi } from 'service/api';
import css from './Reviews.module.css';

export const Reviews = () => {
  const { movieId } = useParams();
  const {
    data: dataMovies,
    isError,
    isLoading,
  } = useFetchData(() => getReviewsMoviesApi(movieId), [movieId]);

  if (isError) {
    return <p>Download error</p>;
  }

  return (
    <Section>
      <ul className={css.wrapper}>
        {isLoading ? (
          <Loader />
        ) : (
          dataMovies &&
          dataMovies.map(el => <ReviewsItem key={el.id} {...el} />)
        )}
      </ul>
    </Section>
  );
};

/* <p>We don't have any reviews for this movie</p> */
