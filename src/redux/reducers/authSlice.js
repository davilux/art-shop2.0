import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//THUNKS
export const authorizeUser = createAsyncThunk('auth', async () => {
  try{
    //TODO: check if credentials are valid
  }
  catch(e){
    return e.message
  }
})

//SLICE
export const authSlice = createSlice({
  name : "state",
  initialState : {
    token: {},
    status: 'idle',
    error : null
  },
  reducers : {},
  extraReducers(builder){
    builder
      .addCase(auth.pending, (state) => {
        state.status = 'loading'
      })
  }
})

export default usersSlice.reducer
