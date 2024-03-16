import { configureStore } from '@reduxjs/toolkit';
// import userSlice from '../reducers/userSlice';
// import formSlice from '../reducers/formSlice';
import rootReducer from '../reducers';
const store = configureStore({
  reducer: rootReducer

});

export default store;
