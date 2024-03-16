import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  formDataArray: [],
  fullName: '',
  id: '',
  age: '',
  city: '',
  isRefetching: false
};
const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setFullName: (state, action) => {
      return {
        ...state,
        fullName: action.payload
      }
    },
    setId: (state, action) => {
      return {
        ...state,
        id: action.payload
      }
    },
  setAge: (state, action) => {
    return {
      ...state,
      age: action.payload
    }
  },
  setCity: (state, action) => {
    return {
      ...state,
      city: action.payload
    }
  },
  setFormDataArray: (state, action) => {
    return {
      ...state,
      formDataArray: action.payload
    }
  },
  addFormData: (state, action) => {
    return {
      ...state,
      formDataArray: action.payload
    }
  },
  clearFormData: (state) => {
    return {
      ...state,
      formDataArray: []
    }
  },
  setRefetching: (state, action) => {
    return {
      ...state,
      isRefetching: action.payload
    }
  }
},
});

export const { addFormData, clearFormData, setRefetching, setCity, setFullName, setId } = formSlice.actions;
export default formSlice.reducer;
export const { setAge } = formSlice.actions;
