import { createAsyncThunk } from '@reduxjs/toolkit';

import instance from './axiosSettings';

export const fetchUsers = createAsyncThunk(
  'user/fetchAll',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/starting-state');
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue('Failed to receive users');
    }
  },
);
