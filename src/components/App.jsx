import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';

import { Home, Movies } from 'pages';
import { SharedLayout } from './SharedLayout';
import { MovieDetails } from './MovieDetails';
// import { getTrendingMovies } from 'services';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="*" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
        <Route path="/movies/:id" element={<MovieDetails />}></Route>
      </Route>
    </Routes>
  );
};
