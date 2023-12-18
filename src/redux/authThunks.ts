import { loginApi, registerApi } from './../service/authService';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginStart, loginSuccess, loginFailure, registerSuccess, registerFailure, registerStart } from './authSlice';

interface Credentials {
    email: string;
    password: string;
}

export const loginUser = createAsyncThunk('auth/loginUser', async (credentials:Credentials, { dispatch }) => {
  dispatch(loginStart());
  try {
    const user = await loginApi(credentials);
    dispatch(loginSuccess(user));
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    dispatch(loginFailure(error));
  }
});

export const registerUser = createAsyncThunk('auth/registerUser', async (credentials:Credentials, { dispatch }) => {
  dispatch(registerStart());
  try {
    const user = await registerApi(credentials);
    dispatch(registerSuccess(user));
  } catch (error) {
    dispatch(registerFailure(error));
  }
});





