import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Section } from 'components/Section/Section';
import { Loader } from 'components/Loader/Loader';
import { useFetchData } from 'hooks/useFetchData';
import { getMovieByNameApi } from 'service/api';
import { useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [search] = useSearchParams();
  const query = search.get('query');

  const {
    data: dataMovies,
    isError,
    isLoading,
  } = useFetchData(() => {
    if (query) {
      return getMovieByNameApi(query);
    }
    return null;
  }, [query]);

  if (isError) {
    return <p>Download error</p>;
  }

  return (
    <>
      <Section>
        <SearchForm />
      </Section>
      {isLoading ? (
        <Loader />
      ) : (
        dataMovies && (
          <Section>
            <MoviesList dataMovies={dataMovies} />
          </Section>
        )
      )}
    </>
  );
};
