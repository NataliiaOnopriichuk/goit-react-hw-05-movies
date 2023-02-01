import { SearchForm } from 'components/SearchForm/SearchForm';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Movies = () => {
  return (
    <div>
      <SearchForm />
      <MoviesList />
    </div>
  );
};
