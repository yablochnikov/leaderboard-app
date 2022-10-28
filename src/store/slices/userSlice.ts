import { createSlice } from '@reduxjs/toolkit';

import { User } from '../../types/User';

type UserState = {
  users: User[];
  isLoading: boolean;
  error: string;
};

const initialState: UserState = {
  users: [],
  isLoading: false,
  error: '',
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
});

export default userSlice.reducer;
