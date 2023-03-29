import productsReducer from './reducers/productsSlice';
import usersReducer from './reducers/usersSlice'
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products : productsReducer,
  users : usersReducer
})

export default configureStore({
  reducer: rootReducer,
});
