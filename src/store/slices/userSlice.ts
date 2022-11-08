import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from '../../types/User';
import { fetchUsers } from '../actionCreators';

import { findHighest, sortArr } from './../../utils/array';

type UserState = {
  isLoading: boolean;
  isEditModal: boolean;
  isAddModal: boolean;
  error: string;
  usersView: User[];
  topStats: User[];
  totalStats: User[][];
  page: number;
  selectedUser: number;
};

const initialState: UserState = {
  usersView: [],
  totalStats: JSON.parse(localStorage.getItem('TotalStats') as string) || [],
  topStats: [],
  isLoading: true,
  isAddModal: false,
  isEditModal: false,
  error: '',
  page: 0,
  selectedUser: 0,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    openAddModal(state) {
      state.isAddModal = true;
    },
    openEditModal(state) {
      state.isEditModal = true;
    },
    closeModal(state) {
      state.isEditModal = false;
      state.isAddModal = false;
    },
    setTopStats(state, action) {
      state.topStats = action.payload;
    },
    setUsersView(state, action: PayloadAction<User[]>) {
      const res = sortArr(action.payload);
      state.usersView = res;
      state.isLoading = false;
    },
    addNewUser(state, action: PayloadAction<User>) {
      state.usersView.push(action.payload);
      state.totalStats[state.page].push(action.payload);
      state.totalStats.forEach((el, i) => {
        i !== state.page
          ? el.push({ name: action.payload.name, score: 0 })
          : null;
      });
      localStorage.setItem('Users', JSON.stringify(sortArr(state.usersView)));
      state.totalStats[state.page] = findHighest([
        state.totalStats[state.page],
      ]);
      localStorage.setItem('TotalStats', JSON.stringify(state.totalStats));
      state.isAddModal = false;
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    selectUser(state, action: PayloadAction<number>) {
      state.selectedUser = action.payload;
    },
    changeUser(state, action: PayloadAction<number>) {
      state.usersView[state.selectedUser].score = action.payload;
      console.log(state.selectedUser);
      state.totalStats[state.page] = sortArr(state.usersView);
      localStorage.setItem('TotalStats', JSON.stringify(state.totalStats));
      localStorage.setItem(
        'Users',
        JSON.stringify(findHighest([state.usersView])),
      );
      state.isEditModal = false;
    },
  },
  extraReducers: {
    [fetchUsers.fulfilled.type]: (state, action: PayloadAction<User[]>) => {
      state.totalStats.push(findHighest([action.payload]));
      localStorage.setItem(
        'Users',
        JSON.stringify(findHighest([action.payload])),
      );
      localStorage.setItem('TotalStats', JSON.stringify(state.totalStats));
      state.isLoading = false;
      state.error = '';
    },
    [fetchUsers.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchUsers.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default userSlice.reducer;
