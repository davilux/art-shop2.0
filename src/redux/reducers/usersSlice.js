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

export const loginUser = createAsyncThunk('loginUser', async ({username, password}) => {
  try{
    const loginResponse = await axios.post('/api/auth/login', {
      username,
      password
    })

    //TODO: Move tokens to cookies
    //TODO: replace axios with apiClient from axiosConfig
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
export const usersSlice = createSlice({
  name : "state",
  initialState : {
    allUsers: [],
    singleUser : {},
    loggedInUser : {},
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

export default usersSlice.reducer
