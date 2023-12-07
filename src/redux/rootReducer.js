import { createSlice } from '@reduxjs/toolkit';
import { getCarByIdThunk, getCarsThunk } from '../thunk/thunk';

const initialState = {
  // allCars: [],
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
    setCarById(state, action) {
      state.carById = action.payload;
    },
  },

  extraReducers: builder =>
    builder
      .addCase(getCarsThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        // console.log('state.carsList ', state.carsList);
        // console.log('payload', action.payload);
        state.carsList.push(...action.payload);
        state.error = '';
        // return [...state.carsList, ...action.payload];
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
      }),
  // .addCase(getAllCarsThunk.pending, state => {
  //   state.isLoading = true;
  // })
  // .addCase(getAllCarsThunk.fulfilled, (state, action) => {
  //   state.isLoading = false;
  //   state.allCars = action.payload;
  //   state.error = '';
  // })
  // .addCase(getAllCarsThunk.rejected, (state, action) => {
  //   state.isLoading = false;
  //   state.error = action.payload;
  // }),
});

export const {
  setPage,
  setError,
  setId,
  setShowModal,
  setCarById,
  // setAllCars,
} = carsSlice.actions;

export const selectCarList = state => state.cars.carsList;
export const selectPage = state => state.cars.page;
export const selectError = state => state.cars.error;
export const selectIsLoading = state => state.cars.isLoading;
export const selectId = state => state.cars.id;
export const selectCarById = state => state.cars.carById;
export const selectShowModal = state => state.cars.showModal;
// export const selectAllCars = state => state.cars.allCars;

export const rootReducer = carsSlice.reducer;
