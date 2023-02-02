import { Layout } from 'components/Layout/Layout/Layout';
import { lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Home = lazy(() =>
  import('../../pages/Home/Home').then(module => ({ default: module.Home }))
);

const Movies = lazy(() =>
  import('../../pages/Movies/Movies').then(module => ({
    default: module.Movies,
  }))
);

const MoviesDetails = lazy(() =>
  import('../../pages/MovieDetails/MoviesDetails').then(module => ({
    default: module.MoviesDetails,
  }))
);

const Cast = lazy(() =>
  import('../Cast/Cast').then(module => ({
    default: module.Cast,
  }))
);

const Reviews = lazy(() =>
  import('../Reviews/Reviews').then(module => ({
    default: module.Reviews,
  }))
);

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:movieId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};
