import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MoviesList, Item } from 'components/MoviesList';

export const FoundMoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <div>
      <MoviesList>
        {movies.map(movie => {
          const { id, title, name } = movie;
          return (
            <Item key={id}>
              <Link to={`/movies/${id}`} state={{ from: location }}>
                {title || name}
              </Link>
            </Item>
          );
        })}
      </MoviesList>
    </div>
  );
};
