import axios from "axios";

const API_KEY = "671d6bf8820b863970820a8246137b0b";
axios.defaults.baseURL = "https://api.themoviedb.org/3";


export const getMovieTrendApi = async () => {
  return await axios
    .get('/trending/movie/day', {
        params: {
          api_key: API_KEY,
      },
    })
    .then((response) => response.data);
};


export const getMovieByIdApi = async (id) => {
  return await axios
    .get(`/movie/${id}`, {
      params: {
          api_key: API_KEY,
      },
    })
    .then((response) => response.data);
};

export const getReviewsMoviesApi = async (id) => {
  return await axios
    .get(`/movie/${id}/reviews`, {
      params: {
          api_key: API_KEY,
      },
    })
    .then((response) => response.data);
};

export const getCastApi = async (id) => {
  return await axios
    .get(`/movie/${id}/credits`, {
      params: {
          api_key: API_KEY,
      },
    })
    .then((response) => response.data);
};