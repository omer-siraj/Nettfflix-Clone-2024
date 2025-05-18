import axios from 'axios';

// Create a configured axios instance for TMDB API
const instance = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  // Optionally include the API key by default for all requests:
  // params: {
  //   api_key: process.env.REACT_APP_TMDB_API_KEY,
  // },
});

export default instance;
