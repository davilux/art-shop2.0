import productsReducer from './reducers/productsSlice';
import authReducer from './reducers/authSlice'
import usersReducer from './reducers/usersSlice'
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products : productsReducer,
  users : usersReducer,
  auth : authReducer
})

export default configureStore({
  reducer: rootReducer,
});
