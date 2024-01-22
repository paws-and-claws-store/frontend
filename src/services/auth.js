import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://paws-and-claws-store.onrender.com',
});

const setToken = token => {
  if (token) {
    return (instance.defaults.headers.common.Authorization = `Bearer ${token}`);
  }
  instance.defaults.headers.common.Authorization = '';
};

instance.interceptors.response.use(
  response => response,
  async error => {
    if (error.response.status === 401 && !error.config._retry && error.request.responseURL !== 'https://paws-and-claws-store.onrender.com/api/auth/verifyResetToken') {
      error.config._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      const { data } = await instance.post('/api/auth/refresh', {refreshToken});
      setToken(data.accessToken);
      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);

      return instance(error.config);
    }
    return Promise.reject(error);
  },
);

export const register = async (newUser) => {
    const { data: result } = await instance.post("/api/auth/register", newUser);    
    setToken(result.data.user.accessToken);
    localStorage.setItem("refreshToken", result.data.user.refreshToken);
    localStorage.setItem("accessToken", result.data.user.accessToken);
    return result;
};

export const login = async (user) => {
    const { data: result } = await instance.post("/api/auth/login", user);
    setToken(result.data.user.accessToken);
    localStorage.setItem("refreshToken", result.data.user.refreshToken);
    localStorage.setItem("accessToken", result.data.user.accessToken);
    return result;
};

export const logout = async () => {
    const { data } = await instance.get("/api/auth/logout");
    setToken();
    localStorage.clear()
    return data;
};

export const getCurrent = async (token) => {
    try {
        setToken(token);
        const { data } = await instance.get("/api/auth/current");
        return data;
    }
    catch (error) {
        setToken();
        throw error;
    }
};

export const resendVerifyEmail = async (email) => {
    const data = await instance.post('/api/auth/verify', {email});
    return data;
};

export const resetPassword = async (email) => {
  const data = await instance.post('/api/auth/resetPassword', {email});
  return data;
};

export const verifyResetToken = async (resetPasswordToken) => {
  const data = await instance.post('/api/auth/verifyResetToken', {resetPasswordToken});
  return data.status;
};

export const updatePassword = async (newPass) => {
  const data = await instance.patch('/api/auth/updatePassword', newPass);
  return data.request.status
};

export default instance;