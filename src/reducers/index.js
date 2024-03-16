import { combineReducers } from 'redux';
import counterReducer from './counterSlice';

const rootReducer = combineReducers({
  counter: counterReducer,
  // Other reducers can be added here
});

export default rootReducer;
