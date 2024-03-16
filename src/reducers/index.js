import { combineReducers } from 'redux';
import userSlice from './userSlice';
import formSlice from './formSlice';

const rootReducer = combineReducers({
  user: userSlice,
  form: formSlice
  // Other reducers can be added here
});

export default rootReducer;
