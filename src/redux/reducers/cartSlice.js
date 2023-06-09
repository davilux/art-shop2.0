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

//SLICE
export const cartSlice = createSlice({
  name: "state",
  initialState: {
    items: [],
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
        state.items = action.payload;
      })
      .addCase(getCart.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default cartSlice.reducer;
