import React from 'react';
import { MoviesList, Item } from 'components/MoviesList';

export const FoundMoviesList = ({ movies }) => {
  return (
    <div>
      <MoviesList>
        {movies.map(movie => {
          const { id, title, name } = movie;
          return (
            <Item key={id}>
              <a href="./">{title || name}</a>
            </Item>
          );
        })}
      </MoviesList>
    </div>
  );
};
