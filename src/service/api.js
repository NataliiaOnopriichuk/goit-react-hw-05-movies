
import axios from "axios";

// https://api.themoviedb.org/3/trending/movie/day?api_key=<<api_key>> тренди на головну сторінку

// // Ключ API(v3 auth)
// // 671d6bf8820b863970820a8246137b0b

// // Пример API - запроса
// // https://api.themoviedb.org/3/movie/550?api_key=671d6bf8820b863970820a8246137b0b

// // Ключ доступа к API(v4 auth)
// // eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NzFkNmJmODgyMGI4NjM5NzA4MjBhODI0
// // NjEzN2IwYiIsInN1YiI6IjYzZDdmNGM2MjBlNmE1MDA3ZmZlMTBhNiIsInNjb3Blc
// // yI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.v7CFXyoc9wW9889oNoFOVH8P6BqkXGWq1uj8fbdT9FE


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
    .then((response) => console.log('response.data >> ', response.data));
};