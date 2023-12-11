import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  getCarById,
  getCars,
  getCarsByBrand,
} from 'components/services/services';

export const getCarsThunk = createAsyncThunk(
  'cars/get',
  async (page, thunkApi) => {
    try {
      const data = await getCars(page);

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

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const getCarsByBrandThunk = createAsyncThunk(
  'carsByBrand/get',
  async (brand, thunkApi) => {
    try {
      const data = await getCarsByBrand(brand);

      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
