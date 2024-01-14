import { createSlice } from '@reduxjs/toolkit';
import {
  register,
  login,
  logout,
  getCurrentUser,
  resendVerifyEmail,
  resetPassword,
  verifyResetToken,
  updatePassword,
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
  resetTokenStatus: null,
  newPasswordStatus: null, 
  showMenu: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    showUserPage(state, action) {
      state.isRegistered = false;
      state.isLoggedIn = true;
    },
    showUserMenu(state, action) {
      state.showMenu = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isRegistered = true;
        state.isLoading = false;
        state.error = null;
      })

      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isRegistered = false;
        state.isLoading = false;
      })
      .addCase(logout.fulfilled, (state, action) => {
        state.user = {};
        state.isLoggedIn = false;
        state.isLoading = false;
      })
      .addCase(getCurrentUser.fulfilled, (state, action) => {
        state.user = action.payload;
        state.isLoggedIn = true;
        state.isLoading = false;
      })
      .addCase(resendVerifyEmail.fulfilled, (state, action) => {
      })
      .addCase(resetPassword.fulfilled, (state, action) => {
      })
      .addCase(verifyResetToken.fulfilled, (state, action) => {
        state.resetTokenStatus = action.payload
        state.isLoading = false;
      })
      .addCase(updatePassword.fulfilled, (state, action) => {
        state.newPasswordStatus = action.payload;
        state.isLoading = false;
      })

      .addCase(register.pending, handlePending)
      .addCase(login.pending, handlePending)
      .addCase(logout.pending, handlePending)
      .addCase(getCurrentUser.pending, handlePending)
      .addCase(resendVerifyEmail.pending, handlePending)
      .addCase(resetPassword.pending, handlePending)
      .addCase(verifyResetToken.pending, handlePending)
      .addCase(updatePassword.pending, handlePending)

      .addCase(register.rejected, handleRejected)
      .addCase(login.rejected, handleRejected)
      .addCase(logout.rejected, handleRejected)
      .addCase(getCurrentUser.rejected, handleRejected)
      .addCase(resendVerifyEmail.rejected, handleRejected)
      .addCase(resetPassword.rejected, handleRejected)
      .addCase(verifyResetToken.rejected, (state, action)=>{
        state.resetTokenStatus = action.payload;
        state.isLoading = false;
      })
      .addCase(updatePassword.rejected, (state, action)=>{
        state.newPasswordStatus = action.payload;
        state.isLoading = false;
      });
  },
});

export const { showUserMenu, showUserPage } = authSlice.actions;
export const authReducer = authSlice.reducer;
