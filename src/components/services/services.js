import axios from 'axios';

// export const allCars = async () => {
//   const { data } = await axios.get(
//     'https://64f3a2bfedfa0459f6c6b959.mockapi.io/cars'
//   );
//   return data;
// };

export const getCars = async (page = 1) => {
  const { data } = await axios.get(
    `https://64f3a2bfedfa0459f6c6b959.mockapi.io/cars?page=${page}&limit=12`
  );
  console.log('serv', data);
  return data;
};

export const getCarById = async id => {
  const { data } = await axios.get(
    `https://64f3a2bfedfa0459f6c6b959.mockapi.io/cars/?id=${id}`
  );

  return data;
};
