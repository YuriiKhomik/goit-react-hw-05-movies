import React, { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { getTrendingMovies } from 'services';
import { MoviesList, Item } from 'components/MoviesList';
import { Link } from 'react-router-dom';

export const TrendingMoviesList = () => {
  const [movies, setMovies] = useState([]);
  //   const shouldFetch = useRef(true);

  //   console.log(shouldFetch);

  useEffect(() => {
    // if (!shouldFetch.current) {
    //   return;
    // }
    const abortController = new AbortController();
    const fetchTrendingMovies = async () => {
      try {
        const res = await getTrendingMovies();
        setMovies(res);
        // shouldFetch.current = false;
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendingMovies();
    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Box pl="40px">
      <h1>Trending today</h1>
      <MoviesList>
        {movies.map(movie => {
          const { id, title, name } = movie;
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`}>{title || name}</Link>
            </Item>
          );
        })}
      </MoviesList>
    </Box>
  );
};
