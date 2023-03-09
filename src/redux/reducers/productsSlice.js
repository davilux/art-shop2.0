import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//THUNKS
export const getAllProducts = createAsyncThunk('products/getAll', async () => {
  try{
    const {data} = await axios.get('/api/products')
    return data
  }
  catch(e){
    return e.message
  }
})

//SLICE
export const productsSlice = createSlice({
  name : "state",
  initialState : {
    allProducts: [],
    singleProduct : {},
    status: 'idle',
    error : null
  },
  reducers : {},
  extraReducers(builder){
    builder
      .addCase(getAllProducts.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allProducts = action.payload
      })
      .addCase(getAllProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
  }
})

export default productsSlice.reducer
