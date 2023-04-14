import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//THUNKS
export const getCart = createAsyncThunk("cart/get", async (userId) => {
  try {
    const { data } = await axios.get(`/api/cart${userId}`);
    return data;
  } catch (e) {
    return e.message;
  }
});

//SLICE
export const cartSlice = createSlice({
  name: "state",
  initialState: {
    cart: {},
    status: "loading",
    error: "",
  },
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCart.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCart.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.cart = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
