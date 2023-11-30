import axios from 'axios';

export const getTrendingMovies = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDBhNzQ0N2ViODhhMzJjM2M2YzQ2NGVhNzU5ZTNkZCIsInN1YiI6IjY0ZDQ5NzdkMDIxY2VlMDBhZTUxMzZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cq0FehHAed9VboBb1I5wNuRl11_5W9Mam-VxClltFRU',
    },
  };

  const { data } = await axios.get(
    'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
    options
  );
  // console.log(data.results);
  return data.results;
};

export const getDetails = async id => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDBhNzQ0N2ViODhhMzJjM2M2YzQ2NGVhNzU5ZTNkZCIsInN1YiI6IjY0ZDQ5NzdkMDIxY2VlMDBhZTUxMzZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cq0FehHAed9VboBb1I5wNuRl11_5W9Mam-VxClltFRU',
    },
  };

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
    options
  );
  // console.log(data);
  return data;
};

export const getCast = async id => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDBhNzQ0N2ViODhhMzJjM2M2YzQ2NGVhNzU5ZTNkZCIsInN1YiI6IjY0ZDQ5NzdkMDIxY2VlMDBhZTUxMzZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cq0FehHAed9VboBb1I5wNuRl11_5W9Mam-VxClltFRU',
    },
  };

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=en-US`,
    options
  );
  return data;
};

export const getReviews = async id => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDBhNzQ0N2ViODhhMzJjM2M2YzQ2NGVhNzU5ZTNkZCIsInN1YiI6IjY0ZDQ5NzdkMDIxY2VlMDBhZTUxMzZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cq0FehHAed9VboBb1I5wNuRl11_5W9Mam-VxClltFRU',
    },
  };

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  );
  return data.results;
};

export const getSearchMovie = async userValue => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDBhNzQ0N2ViODhhMzJjM2M2YzQ2NGVhNzU5ZTNkZCIsInN1YiI6IjY0ZDQ5NzdkMDIxY2VlMDBhZTUxMzZhMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.cq0FehHAed9VboBb1I5wNuRl11_5W9Mam-VxClltFRU',
    },
  };

  const { data } = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${userValue}&include_adult=false&language=en-US&page=1`,
    options
  );
  return data;
};
