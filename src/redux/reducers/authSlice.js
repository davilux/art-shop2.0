import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

//THUNKS
export const loginUser = createAsyncThunk('loginUser', async ({username, password}) => {
  try{
    const loginResponse = await axios.post('/api/auth/login', {
      username,
      password
    })

    //TODO: Move tokens to cookies
    if(loginResponse && loginResponse.status === 200) {
      window.localStorage.setItem('accessToken', loginResponse.data.accessToken)
      window.localStorage.setItem('refreshToken', loginResponse.data.refreshToken)
    }
    return loginResponse.data.user
  }
  catch(e){
    console.error(e)
    return e.message
  }
})

//SLICE
export const authSlice = createSlice({
  name : "state",
  initialState : {
    loggedInUser : {},
    status: 'idle',
    error : null
  },
  reducers : {},
  extraReducers(builder){
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.loggedInUser = action.payload
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  }
})

export default authSlice.reducer
