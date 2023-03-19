import React, { useEffect, useState } from 'react';
import { Link, useParams, useLocation, Outlet } from 'react-router-dom';
import { Box } from 'components/Box/Box';
import { getMovieDetails, getMovieImage } from 'services';
import { Title, SmallTitle } from './MovieDetails.styled';
// import { Cast } from 'components/Cast';

export const MovieDetails = () => {
  const [movie, setMovie] = useState([]);
  const [imageUrl, setImageUrl] = useState('');
  const [error, setError] = useState(null);

  const { id } = useParams();

  const location = useLocation();

  const { title, name, overview, genres, release_date, vote_average } = movie;

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
        setError(error.response.data.status_message);
      }
    };
    fetchMovieDetails();

    return () => {
      abortController.abort();
    };
  }, [id]);

  const makeGenres = array => {
    return array.map(item => {
      return <span key={item.name}>{item.name} </span>;
    });
  };

  const makeReleaseDate = date => {
    return date.slice(0, 4);
  };

  const makeRating = rating => {
    return Math.round(rating * 10);
  };

  return (
    <Box pl="40px" pr="40px" pt="20px">
      {movie.length !== 0 && (
        <>
          <Link to={location.state?.from ?? '/'}>Go back</Link>
          <Box display="flex" mb="20px" mt="20px">
            <Box>
              <img src={imageUrl} alt="movie title" />
            </Box>
            <Box pl="20px">
              <Title>
                {title || name} {makeReleaseDate(release_date)}
              </Title>
              <p>User Score: {makeRating(vote_average)}%</p>
              <SmallTitle>Overview</SmallTitle>
              <p>{overview}</p>
              <SmallTitle>Genres</SmallTitle>
              <p>{makeGenres(genres)}</p>
            </Box>
          </Box>
          <Box borderTop="1px solid black" borderBottom="1px solid black">
            <p>Additional information</p>
            <ul>
              <li>
                <Link to={`cast`} state={{ ...location.state }}>
                  Cast
                </Link>
              </li>
              <li>
                <Link to={'reviews'} state={{ ...location.state }}>
                  Reviews
                </Link>
              </li>
            </ul>
          </Box>
        </>
      )}

      {error && (
        <>
          <Link to={location.state.from}>Go back</Link>
          <h1>Ooops...smth went wrong:(</h1> <p>{error}</p>
        </>
      )}

      {/* <Outlet>
        <Cast id={id} />
      </Outlet> */}
      <Outlet />
    </Box>
  );
};
