import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as api from '../../services/auth';
// import Cookies from 'js-cookie';

// -----------------------------------------SIGNUP--------------------------------------------
export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const result = await api.register(data);

      return {name: result.data.user.name, email: result.data.user.email};
      
    } catch (error) {
      const message = [409, 401, 400].includes(error?.response?.status)
        ? error?.response?.data?.message
        : `Request was failed with code ${error?.response?.status}`;
      // console.log(' message:', message);
      Notify.failure(`Registration is not completed. ${message}`, {
        timeout: 5000,
      });
      return thunkAPI.rejectWithValue({
        message: error?.response?.data?.message,
        status: error?.response?.status,
      });
    }
  },
);

// --------------------------------------LOGIN-----------------------------------------------
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) => {
  try {
    const { data } = await api.login(user);
    return {name: data.user.name, email: data.user.email}

  } catch (error) {
    const message = [409, 401, 400].includes(error?.response?.status)
      ? error?.response?.data?.message
      : `Request was failed with code ${error?.response?.status}`;

    Notify.failure(`Registration is not completed. ${message}`, {
      timeout: 3000,
    });
    return thunkAPI.rejectWithValue({
      message: error?.response?.data?.message,
      status: error?.response?.status,
    });
  }
});

// ---------------------------------------LOGOUT----------------------------------------------
export const logout = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  const accessToken = localStorage.getItem('accessToken');
  try {
    const data = await api.logout(accessToken);
    Notify.success(`${data.message}`);

    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// -----------------------------------------GetCURRENTUSER--------------------------------------
export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const accessToken = localStorage.getItem('accessToken');
    if (!accessToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    try {
      const data = await api.getCurrent(accessToken);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// ------------------------------------ResendVerifyEmail----------------------------------------
export const resendVerifyEmail = createAsyncThunk(
  'auth/resendEmail',
  async (email, thunkAPI) => {
    try {
      const { data } = await api.resendVerifyEmail(email);
      Notify.success(`${data.message}`);
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// ------------------------------------ResetPassword----------------------------------------
export const resetPassword = createAsyncThunk(
  'auth/resetPassword',
  async (email, thunkAPI) => {
    try {
      const { data } = await api.resetPassword(email);
      return data
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);

// ------------------------------------ResendVerifyPassword----------------------------------------
export const verifyResetToken = createAsyncThunk(
  'auth/verifyResetToken',
  async (token, thunkAPI) => {
    try {
      const  status  = await api.verifyResetToken(token);
      return status
    } catch (error) {      
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);

// ------------------------------------UpdatePassword----------------------------------------
export const updatePassword = createAsyncThunk(
  'auth/updatePassword',
  async (newPass, thunkAPI) => {
    try {
      const  status  = await api.updatePassword(newPass);
      console.log("status:", status)
      return status
    } catch (error) {      
      return thunkAPI.rejectWithValue(error.response.status);
    }
  },
);

