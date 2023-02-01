import { CastItems } from 'CastItems/CastItems';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCastApi } from 'service/api';

export const Cast = () => {
  const [dataMovies, setDataMovies] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    if (!movieId) return;
    const ReviewsMovies = async () => {
      const data = await getCastApi(movieId);
      setDataMovies(data.cast);
    };
    ReviewsMovies().catch(error => console.error(error));
  }, [movieId]);

  return (
    <ul
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '30px',
        paddingTop: '20px',
      }}
    >
      {dataMovies.length > 0 ? (
        dataMovies.map(el => <CastItems key={el.id} {...el} />)
      ) : (
        <p>We don't have a cast list for this movie</p>
      )}
    </ul>
  );
};
