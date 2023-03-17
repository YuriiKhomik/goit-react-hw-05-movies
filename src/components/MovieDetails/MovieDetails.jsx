import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { getMovieDetails } from 'services';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const { id } = useParams();

  const {
    poster_path,
    title,
    name,
    release_date,
    vote_average,
    vote_count,
    overview,
    genres,
  } = movie;

  const genreNames = genres => {};

  useEffect(() => {
    // if (!id) {
    //   return;
    // }

    const abortController = new AbortController();

    const fetchMovieDetails = async () => {
      try {
        const res = await getMovieDetails(id);
        setMovie(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();

    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <Box border="1px solid red">
      <Link to="./">Go back</Link>
      <div>
        <img alt="movie title" />
        <h1>
          {title || name}, {release_date}
        </h1>{' '}
        <p>user score</p> <h2>Overview</h2> <p>{overview}</p>
        <h3>Genres</h3>
        {movie.length !== 0 && (
          <p>
            {genres.map(genre => {
              return <span key={genre.name}>{genre.name} </span>;
            })}
          </p>
        )}
      </div>
      <Box border="1px solid red">
        <p>Additional information</p>
        <ul>
          <li>
            <a href="./">Cast</a>
          </li>
          <li>
            <a href="./">Reviews</a>
          </li>
        </ul>
      </Box>
    </Box>
  );
};
