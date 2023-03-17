import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { SearchForm } from 'components/SearchForm';
import { searchMovies } from 'services';
import { FoundMoviesList } from 'components/FoundMoviesList';

export const Movies = () => {
  const [movies, setItems] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) {
      return;
    }

    const abortController = new AbortController();

    const fetchMovies = async () => {
      try {
        const movies = await searchMovies(query);
        setItems(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();

    return () => {
      abortController.abort();
    };
  }, [query]);

  const handleFormSubmit = searchQuery => {
    setSearchParams({ query: searchQuery });
  };
  // console.log(Outlet.context);

  return (
    <Box p="20px">
      <SearchForm onSubmit={handleFormSubmit} />
      <FoundMoviesList movies={movies} />
    </Box>
  );
};
