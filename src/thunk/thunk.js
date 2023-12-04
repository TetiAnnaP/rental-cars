import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarById, getCars } from 'components/services/services';

export const getCarsThunk = createAsyncThunk(
  'cars/get',
  async (page, thunkApi) => {
    try {
      const data = await getCars(page);
      // console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCarByIdThunk = createAsyncThunk(
  'car/get',
  async (id, thunkApi) => {
    try {
      const data = await getCarById(id);
      console.log(data);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);