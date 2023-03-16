import axios from 'axios';

const API_KEY = '4a77cd59efaf1d55812c775cbc766c97';

const ENDPOINTS = {
  trending: 'https://api.themoviedb.org/3/trending/all/day',
  search: 'https://api.themoviedb.org/3/search/movie',
  details: 'https://api.themoviedb.org/3/movie',
};

export const getTrendingMovies = async () => {
  const { trending } = ENDPOINTS;
  axios.defaults.baseURL = `${trending}?api_key=${API_KEY}`;
  const response = await axios.get();
  return response.data.results;
};

// getTrendingMovies().then(console.log);

export const searchMovies = async searchQuery => {
  const { search } = ENDPOINTS;
  axios.defaults.baseURL = `${search}?api_key=${API_KEY}&query=${searchQuery}&page=1&include_adult=false`;
  const response = await axios.get();
  return response.data.results;
};

// searchMovies('animals').then(console.log);

export const getMovieDetails = async movieId => {
  const { details } = ENDPOINTS;
  axios.defaults.baseURL = `${details}/${movieId}?api_key=${API_KEY}`;
  const response = await axios.get();
  return response.data;
};

// getMovieDetails(25713).then(console.log);

export const getMovieCredits = async movieId => {
  const { details } = ENDPOINTS;
  axios.defaults.baseURL = `${details}/${movieId}/credits?api_key=${API_KEY}`;
  const response = await axios.get();
  return response.data.cast;
};

// getMovieCredits(25713).then(console.log);

export const getMovieReviews = async movieId => {
  const { details } = ENDPOINTS;
  axios.defaults.baseURL = `${details}/${movieId}/reviews?api_key=${API_KEY}&page=1`;
  const response = await axios.get();
  return response.data.results;
};

// getMovieReviews(11345).then(console.log);
