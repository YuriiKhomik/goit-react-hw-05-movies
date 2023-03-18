import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { getMovieDetails, getMovieImage } from 'services';
import { Title, SmallTitle } from './MovieDetails.styled';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const { id } = useParams();

  const location = useLocation();

  const { title, name, release_date, vote_average, overview, genres } = movie;

  useEffect(() => {
    if (!id) {
      return;
    }

    const abortController = new AbortController();

    const fetchMovieDetails = async () => {
      try {
        const res = await getMovieDetails(id);
        setMovie(res);
        const image = await getMovieImage(res.poster_path);
        setImageUrl(image);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieDetails();

    return () => {
      abortController.abort();
    };
  }, [id]);

  useEffect(() => {});

  if (movie.length !== 0) {
    return (
      <Box pl="40px" pr="40px">
        <Link to={location.state.from}>Go back</Link>
        <Box display="flex">
          <Box>
            <img src={imageUrl} alt="movie title" />
          </Box>
          <Box pl="20px">
            <Title>
              {title || name} ({release_date.slice(0, 4)})
            </Title>
            <p>User Score: {`${Math.round(vote_average * 10)}%`}</p>
            <SmallTitle>Overview</SmallTitle>
            <p>{overview}</p>
            <SmallTitle>Genres</SmallTitle>
            <p>
              {genres.map(genre => {
                return <span key={genre.name}>{genre.name} </span>;
              })}
            </p>
          </Box>
        </Box>
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
  }
};
