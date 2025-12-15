// src/features/counters/countersSlice.js
import { createSlice } from '@reduxjs/toolkit';

const countersSlice = createSlice({
  name: 'counters',
  initialState: [],
  reducers: {
    addCounter: (state) => {
      // Agrega un nuevo contador con id único y valor inicial 0
      state.push({ id: Date.now().toString(), value: 0 });
    },
    removeCounter: (state, action) => {
      // Elimina un contador por id
      return state.filter(counter => counter.id !== action.payload);
    },
    increment: (state, action) => {
      // Incrementa el valor de un contador específico
      const counter = state.find(c => c.id === action.payload);
      if (counter) counter.value += 1;
    },
    decrement: (state, action) => {
      // Decrementa el valor de un contador específico
      const counter = state.find(c => c.id === action.payload);
      if (counter) counter.value -= 1;
    },
  },
});

export const { addCounter, removeCounter, increment, decrement } = countersSlice.actions;
export default countersSlice.reducer;
