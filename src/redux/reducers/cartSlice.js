import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//THUNKS
export const getCart = createAsyncThunk("cart/get", async (userId) => {
  try {
    const token = window.localStorage.getItem("accessToken");
    const { data } = await axios.get(`/api/cart/${userId}`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
    return data;
  } catch (e) {
    return e.message;
  }
});

//Clears the cart's state when a user logs out
export const clearCart = createAsyncThunk("clearCart", async () => {
  try {
    return true;
  } catch (e) {
    return e.message;
  }
});

//SLICE
export const cartSlice = createSlice({
  name: "state",
  initialState: {
    items: [],
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCart.pending, (state) => {})
      .addCase(getCart.fulfilled, (state, action) => {
        state.items = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.error = action.error.message;
      })
      .addCase(clearCart.fulfilled, (state, action) => {
        state.items = [];
      });
  },
});

export default cartSlice.reducer;
