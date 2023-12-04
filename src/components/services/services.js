import axios from 'axios';

export const getCars = async (page = 1) => {
  const { data } = await axios.get(
    `https://64f3a2bfedfa0459f6c6b959.mockapi.io/cars?page=${page}&limit=12`
  );

  return data;
};

export const getCarById = async id => {
  const { data } = await axios.get(
    `https://64f3a2bfedfa0459f6c6b959.mockapi.io/cars/?id=${id}`
  );

  return data;
};
