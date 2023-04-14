import productsReducer from "./reducers/productsSlice";
import usersReducer from "./reducers/usersSlice";
import cartReducer from "./reducers/cartSlice";
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: productsReducer,
  users: usersReducer,
  cart: cartReducer,
});

export default configureStore({
  reducer: rootReducer,
});
