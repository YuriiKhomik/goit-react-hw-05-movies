import 'react-toastify/dist/ReactToastify.css';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { routes } from 'routes/routes';
import { SharedLayout } from './SharedLayout';

const Home = lazy(() => import('pages/Home'));
const Movies = lazy(() => import('pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('../pages/MovieDetails/Cast/Cast'));
const Reviews = lazy(() => import('../pages/MovieDetails/Reviews/Reviews'));

export const App = () => {
  const { home, movies, movieDetails } = routes;
  return (
    <Routes>
      <Route path={home} element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path={movies} element={<Movies />} />
        <Route path={movieDetails} element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
