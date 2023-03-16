import { Routes, Route } from 'react-router-dom';
import { Home, Movies } from 'pages';
import { NavBar } from './NavBar';
import { getTrendingMovies } from 'services';

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </div>
  );
};
