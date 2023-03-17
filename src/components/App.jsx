import 'react-toastify/dist/ReactToastify.css';
import { Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Home, Movies } from 'pages';
import { NavBar } from './NavBar';
// import { getTrendingMovies } from 'services';

export const App = () => {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="*" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
