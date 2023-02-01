import { CastItems } from 'components/CastItems/CastItems';
import { Loader } from 'components/Loader/Loader';
import { Section } from 'components/Section/Section';
import { useFetchData } from 'hooks/useFetchData';
import { useParams } from 'react-router-dom';
import { getCastApi } from 'service/api';

export const Cast = () => {
  const { movieId } = useParams();

  const {
    data: dataMovies,
    isError,
    isLoading,
  } = useFetchData(() => getCastApi(movieId), [movieId]);

  if (isError) {
    return <p>Download error</p>;
  }

  return (
    <Section>
      <ul
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '30px',
        }}
      >
        {isLoading ? (
          <Loader />
        ) : (
          dataMovies && dataMovies.map(el => <CastItems key={el.id} {...el} />)
        )}
      </ul>
    </Section>
  );
};
{
  /* <p>We don't have a cast list for this movie</p>; */
}
