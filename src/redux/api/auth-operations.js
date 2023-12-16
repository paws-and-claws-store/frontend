import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Cookies from 'js-cookie';


const instance = axios.create({
  baseURL: 'https://paws-and-claws-store.onrender.com',
});

const setToken = token => {
  console.log('token:', token);
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.Authorization = '';
};

//---------------------------------------INTERCEPTORS----------------------------------------------
instance.interceptors.response.use(response => response,
  async error => {
    console.log("error:", error)
    if (error.response.status === 401) {
      const refreshToken = Cookies.get('refreshToken');

      console.log("refreshToken:", refreshToken)
      try {
        const { data } = await instance.post('/api/auth/refresh', refreshToken);

      console.log('data:', data.result);

      setToken(data.accessToken);

      Cookies.set('refreshToken',data.refreshToken, {httpOnly: true});


      return instance(error.config);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);

  },
);

// -----------------------------------------SIGNUP--------------------------------------------
export const signup = createAsyncThunk(
  'auth/signup',
  async (data, thunkAPI) => {
    console.log("data:", data)
    try {
      const { data: result } = await instance.post('/api/auth/register', data);
      console.log('SignupResult:', result);
      setToken(result.data.user.accessToken);
      Cookies.set('refreshToken',result.data.user.refreshToken, {httpOnly: true});
      return result.data.user;
    } catch (error) {
      const message = [409, 401, 400].includes(error?.response?.status)
        ? error?.response?.data?.message
        : `Request was failed with code ${error?.response?.status}`;
        console.log(" message:",  message)
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
export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const { data: result } = await instance.post('/api/auth/login', data);
    console.log('LoginResult:', result.data);
    setToken(result.data.user.accessToken);
    Cookies.set('refreshToken',result.data.user.refreshToken, {httpOnly: true});
    return result.data.user;
  } catch (error) {
    const message = [409, 401, 400].includes(error?.response?.status)
      ? error?.response?.data?.message
      : `Request was failed with code ${error?.response?.status}`;

    Notify.failure(`Registration is not completed. ${message}`, {
      timeout: 5000,
    });
    return thunkAPI.rejectWithValue({
      message: error?.response?.data?.message,
      status: error?.response?.status,
    });
  }
});

// ---------------------------------------LOGOUT----------------------------------------------
export const logout = createAsyncThunk('auth/logOut', async (_, thunkAPI) => {
  try {
    const data = await instance.post('/api/auth/logout');
    console.log('LogoutData:', data);
    Cookies.remove('refreshToken');
    setToken();
    return data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

// -----------------------------------------GETCURRENTUSER--------------------------------------------
export const getCurrentUser = createAsyncThunk(
  'auth/currentUser',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.accessToken;
    console.log("persistedToken:", persistedToken)

    if (!persistedToken) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }
    setToken(persistedToken);

    try {
      const { data } = await instance.get('/api/auth/current');
      console.log('data:', data);

      return data;
    } catch (error) {
      setToken();
      return thunkAPI.rejectWithValue(error.message);
    }
  },
);
