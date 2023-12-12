import { createSlice } from '@reduxjs/toolkit';
import {
  getCarByIdThunk,
  getCarsByBrandThunk,
  getCarsThunk,
} from '../thunk/thunk';
import * as carsSelectors from '../components/selectors';

const initialState = {
  carsList: [],
  carById: [],
  page: 1,
  error: null,
  isLoading: false,
  id: '',
  showModal: false,
  disabled: false,
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
    setCarById(state, action) {
      state.carById = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getCarsThunk.pending, state => {
        state.isLoading = true;
        state.disabled = false;
      })
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;

        state.carsList.push(...action.payload);
        state.error = '';
        if (action.payload.length < 12) {
          state.disabled = true;
          state.page = 1;
        }
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
        state.carById = [...state.carsList, ...action.payload];
        state.error = '';
      })
      .addCase(getCarByIdThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCarsByBrandThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCarsByBrandThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carsList = action.payload;
        state.error = '';
      })
      .addCase(getCarsByBrandThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      }),
});

export const { setPage, setError, setId, setShowModal, setCarById } =
  carsSlice.actions;

export const {
  selectCarList,
  selectPage,
  selectError,
  selectIsLoading,
  selectId,
  selectCarById,
  selectShowModal,
  selectDisabled,
} = carsSelectors;

export const carReducer = carsSlice.reducer;
