import { MoviesDetailsList } from 'components/MoviesDetailsList/MoviesDetailsList';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieByIdApi } from 'service/api';
import { Section } from 'components/Section/Section';
import { ButtonDescr } from 'components/ButtonDescr/ButtonDescr';
import { Loader } from 'components/Loader/Loader';
import { useFetchData } from 'hooks/useFetchData';

export const MoviesDetails = () => {
  const { movieId } = useParams();

  const {
    data: dataMovies,
    isError,
    isLoading,
  } = useFetchData(() => getMovieByIdApi(movieId), [movieId]);

  if (isError) {
    return <p>Download error</p>;
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Section>
          {dataMovies && <MoviesDetailsList dataMovies={dataMovies} />}
          <ButtonDescr />
        </Section>
      )}
      <Outlet />
    </>
  );
};
