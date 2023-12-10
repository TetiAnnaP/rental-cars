const { createSlice } = require('@reduxjs/toolkit');

const initialState = {
  favorites: [],
  error: null,
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,

  reducers: {
    addFavorite(state, action) {
      state.favorites.push(action.payload);
    },

    removeFavorite(state, action) {
      state.favorites = state.favorites.filter(el => el.id !== action.payload);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

export const selectFavorites = state => state.favorites.favorites;

export const favoritesReducer = favoritesSlice.reducer;
