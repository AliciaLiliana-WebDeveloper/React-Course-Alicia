// src/features/users/usersSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// createAsyncThunk para obtener un usuario aleatorio
export const fetchRandomUser = createAsyncThunk(
  'users/fetchRandomUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://randomuser.me/api/');
      const data = await response.json();
      const user = data.results[0];
      return {
        id: user.login.uuid,
        firstName: user.name.first,
        lastName: user.name.last,
        thumbnail: user.picture.thumbnail,
      };
    } catch (error) {
      return rejectWithValue('Error al obtener usuario');
    }
  }
);

const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null,
  },
  reducers: {
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
      })
      .addCase(fetchRandomUser.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users.push(action.payload);
      })
      .addCase(fetchRandomUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
      });
  },
});

export const { removeUser } = usersSlice.actions;
export default usersSlice.reducer;
