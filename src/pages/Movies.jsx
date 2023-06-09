import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { SearchForm } from 'components/SearchForm';
import { searchMovies } from 'services';
// import { FoundMoviesList } from 'components/FoundMoviesList';
import { MoviesList, Item } from 'components/MoviesList';

const Movies = () => {
  const [movies, setMovies] = useState([]);
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
        setMovies(movies);
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

  return (
    <Box p="20px">
      <SearchForm onSubmit={handleFormSubmit} />
      {movies.length !== 0 ? (
        // <FoundMoviesList movies={movies} query={query} />
        <MoviesList>
          {movies.map(movie => {
            const { id, title, name } = movie;
            return (
              <Item key={id}>
                <Link
                  to={`/movies/${id}`}
                  state={{ from: `/movies?query=${query}` }}
                >
                  {title || name}
                </Link>
              </Item>
            );
          })}
        </MoviesList>
      ) : (
        <p></p>
      )}
    </Box>
  );
};

export default Movies;
