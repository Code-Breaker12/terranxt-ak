// src/features/userSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, updatedData } = action.payload;
      state.users = state.users.map(user => user.id === id ? { ...user, ...updatedData } : user);
    },
    setData: (state, action) => {
      state.baseData = action.payload;
    },
    setSelectedItemId: (state, action) => {
      state.selectedItemId = action.payload;
    },
    setSelectedUpdateItemId: (state, action) => {
      state.selectedUpdateItemId = action.payload;
    },
    setRefetch: (state, action) => {
      state.isRefetch = action.payload;
    },
  },
});

export const { setUsers, removeUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
