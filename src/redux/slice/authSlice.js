import { createSlice } from '@reduxjs/toolkit';
import {
  signup,
  login,
  logout,
  getCurrentUser,
} from '../api/auth-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: {
    name: null,
    email: null,
  },
  accessToken: null,
  // refreshToken: null,
  isLoading: false,
  isRegistered: false,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signup.fulfilled, (state, action) => {
        console.log('action:', action);
        state.user = action.payload.user;
        state.accessToken = action.payload.user.accessToken;
        state.isLoggedIn = true;
        state.isRegistered = true;
        state.isLoading = false;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("action:", action)
        state.accessToken = action.payload.accessToken;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = { name: null, email: null };
        state.accessToken = null;
        state.isLoggedIn = false;
        state.isRegistered = false;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        console.log("action:", action)
        state.user.name = action.payload.name;
        state.user.email = action.payload.email;
        state.isLoggedIn = true;
        state.isLoading = false;
      })

      .addCase(signup.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(logout.pending, handlePending)
      .addCase(getCurrentUser.pending, handlePending)
      .addCase(signup.rejected, handleRejected)
      .addCase(logout.rejected, handleRejected)
      .addCase(getCurrentUser.rejected, handleRejected)
      .addCase(login.rejected, handleRejected);
  },
});

export const authReducer = authSlice.reducer;