import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//THUNKS
export const getAllUsers = createAsyncThunk('users/getAll', async () => {
  try{
    const {data} = await axios.get('/api/users')
    return data
  }
  catch(e){
    return e.message
  }
})

//SLICE
export const usersSlice = createSlice({
  name : "state",
  initialState : {
    allUsers: [],
    singleUser : {},
    status: 'idle',
    error : null
  },
  reducers : {},
  extraReducers(builder){
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allUsers = action.payload
      })
      .addCase(getAllUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message
      })
  }
})

export default usersSlice.reducer
