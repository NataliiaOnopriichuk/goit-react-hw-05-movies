// import PropTypes from 'prop-types';

// import { useEffect } from 'react';
// import { useState } from 'react';
// import { getMovieByIdApi } from 'service/api';

export const MoviesItem = ({ title, backdrop_path, id }) => {
  //   const [dataMovies, setDataMovies] = useState([]);
  //   const [error, setError] = useState(null);

  //   useEffect(() => {
  //     const getMovieById = async () => {
  //       const data = await getMovieByIdApi(id);
  //       console.log('data :>> ', data);
  //       setDataMovies([...data.results]);
  //     };
  //     getMovieById().catch(error => setError(error.message));
  //   }, [id, setError]);

  return (
    <li>
      {/* <a
        href="#"
        onClick={() => {
          getMovieByIdApi(id);
        }}
      >
        <p>{title}</p>
      </a> */}
    </li>
  );
};
