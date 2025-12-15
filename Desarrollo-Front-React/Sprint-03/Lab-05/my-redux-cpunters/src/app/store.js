// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import countersReducer from '../features/counters/countersSlice';

export const store = configureStore({
  reducer: {
    counters: countersReducer,
  },
});

export default store;