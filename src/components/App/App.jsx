import { Cast } from 'components/Cast/Cast';
import { Layout } from 'components/Layout.jsx/Layout/Layout';
import { Reviews } from 'components/Reviews/Reviews';
import { Home } from 'pages/Home/Home';
import { MoviesDetails } from 'pages/MovieDetails/MoviesDetails';
import { Movies } from 'pages/Movies/Movies';
import { Navigate, Route, Routes } from 'react-router-dom';

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
