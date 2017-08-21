import { combineReducers } from 'redux';

import deputiesReducer from './deputies';


export default combineReducers({
  deputies: deputiesReducer,
});
