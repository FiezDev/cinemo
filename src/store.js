import { configureStore } from '@reduxjs/toolkit';
import favReducer from './favSlice'; 

const store = configureStore({
  reducer: {
    favorites: favReducer
  }
});

export default store;
