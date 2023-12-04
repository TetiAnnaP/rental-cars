import { createSlice } from '@reduxjs/toolkit';
import { getCarByIdThunk, getCarsThunk } from '../thunk/thunk';

const initialState = {
  carsList: [],
  carById: [],
  page: 1,
  error: null,
  isLoading: false,
  id: '',
  showModal: false,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,

  reducers: {
    setPage(state, action) {
      state.page = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
    setId(state, action) {
      state.id = action.payload;
    },
    setShowModal(state, action) {
      state.showModal = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getCarsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsList = action.payload;
        state.error = '';
      })
      .addCase(getCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCarByIdThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCarByIdThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carById = action.payload;
        state.error = '';
      })
      .addCase(getCarByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setPage, setError, setId, setShowModal } = carsSlice.actions;

export const selectCarList = state => state.cars.carsList;
export const selectPage = state => state.cars.page;
export const selectError = state => state.cars.error;
export const selectIsLoading = state => state.cars.isLoading;
export const selectId = state => state.cars.id;
export const selectCarById = state => state.cars.carById;
export const selectShowModal = state => state.cars.showModal;

export const rootReducer = carsSlice.reducer;
