import { getMovieTrendApi } from 'service/api';
import { useFetchData } from 'hooks/useFetchData';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const {
    data: dataMovies,
    isError,
    isLoading,
  } = useFetchData(getMovieTrendApi);

  if (isError) {
    return <p>Download error</p>;
  }

  return isLoading ? (
    <Loader />
  ) : (
    dataMovies && (
      <Section>
        <MoviesList dataMovies={dataMovies} />
      </Section>
    )
  );
};
