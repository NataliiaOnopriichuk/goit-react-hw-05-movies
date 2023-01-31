import { ReviewsItem } from 'components/ReviewsItem/ReviewsItem';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsMoviesApi } from 'service/api';
import css from './Reviews.module.css';

export const Reviews = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const ReviewsMovies = async () => {
      const data = await getReviewsMoviesApi(movieId);
      setDataMovies(data.results);
    };
    ReviewsMovies().catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul className={css.wrapper}>
      {dataMovies.length > 0 ? (
        dataMovies.map(el => <ReviewsItem key={el.id} {...el} />)
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </ul>
  );
};
