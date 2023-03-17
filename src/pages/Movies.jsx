import React, { useState, useEffect } from 'react';
import { Box } from 'components/Box/Box';
import { SearchForm } from 'components/SearchForm';
import { searchMovies } from 'services';
import { FoundMoviesList } from 'components/FoundMoviesList';

export const Movies = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [movies, setItems] = useState([]);

  useEffect(() => {
    if (!searchQuery) {
      return;
    }

    const abortController = new AbortController();

    const fetchMovies = async () => {
      try {
        const movies = await searchMovies(searchQuery);
        setItems(movies);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMovies();

    return () => {
      abortController.abort();
    };
  }, [searchQuery]);

  const handleFormSubmit = searchQuery => {
    setSearchQuery(searchQuery);
  };

  return (
    <Box p="20px">
      <SearchForm onSubmit={handleFormSubmit} />
      <FoundMoviesList movies={movies} />
    </Box>
  );
};
