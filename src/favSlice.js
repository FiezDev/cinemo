import { createSlice } from '@reduxjs/toolkit';

export const favSlice = createSlice({
  name: 'favorites',
  initialState: [], // Initial state is an empty array
  reducers: {
    addFavorite: (state, action) => {
      const movieId = action.payload;
      // Check if the movie ID is not already in the favorites
      if (!state.includes(movieId)) {
        state.push(movieId);
      }
    },
    removeFavorite: (state, action) => {
      return state.filter(id => id !== action.payload);
    }
  }
});

// Export actions and reducer
export const { addFavorite, removeFavorite } = favSlice.actions;
export default favSlice.reducer;
