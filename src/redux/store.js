import productsReducer from './reducers/productsSlice';
import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  products : productsReducer
})

export default configureStore({
  reducer: rootReducer,
});
