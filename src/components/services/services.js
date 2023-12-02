import axios from 'axios';

export const getCars = async () => {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
    },
  };

  const { data } = await axios.get(
    'https://64f3a2bfedfa0459f6c6b959.mockapi.io/cars?page=1&limit=12',
    options
  );
  // console.log(data.results);
  return data;
};
