import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  getCurrentUser,
  resendVerifyEmail,
} from '../api/auth-operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  user: {},
  isLoading: false,
  isRegistered: false,
  error: null,
  isLoggedIn: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showUserPage(state, action) {
      state.isRegistered = false;
      state.isLoggedIn = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isRegistered = true;
        state.isLoading = false;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {};
        state.isLoggedIn = false;
        // state.isRegistered = false;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(resendVerifyEmail.fulfilled, (state, action) => {
        // console.log("action:", action)
      })

      .addCase(register.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(logout.pending, handlePending)
      .addCase(getCurrentUser.pending, handlePending)
      .addCase(register.rejected, handleRejected)
      .addCase(logout.rejected, handleRejected)
      .addCase(getCurrentUser.rejected, handleRejected)
      .addCase(login.rejected, handleRejected);
  },
});

export const { userActivated, showUserPage } = authSlice.actions;
export const authReducer = authSlice.reducer;
