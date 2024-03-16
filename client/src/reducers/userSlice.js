import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  users: [],
  data: [],
  isRefetch: false,
  selectedItemId: null,
  selectedUpdateItemId: null
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUsers: (state, action) => {
      return{
        ...state,
       users: action.payload 
      }
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    updateUser: (state, action) => {
      const { id, updatedData } = action.payload;
      state.users = state.users.map(user => user.id === id ? { ...user, ...updatedData } : user);
    },
    setData: (state, action) => {
      return{
        ...state,
        baseData : action.payload
      }
    },
    setSelectedItemId: (state, action) => {
      return{
        ...state,
        selectedItemId: action.payload
      }
    },
    setSelectedUpdateItemId: (state, action) => {
      return{
        ...state,
        selectedUpdateItemId: action.payload
      }
    },
    setRefetch: (state, action) => {
      return{
        ...state,
        isRefetch: action.payload
      }
    },
  },
});

export const { setUsers, removeUser, updateUser, setRefetch, setSelectedItemId, setSelectedUpdateItemId, setData } = userSlice.actions;
export default userSlice.reducer;
