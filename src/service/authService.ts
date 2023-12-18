/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

interface Credentials {
    email: string;
    password: string;
}

const API_URL = 'https://reqres.in/api';

export const loginApi = async (credentials:Credentials) => {
  try {
    const response = await axios.post(`${API_URL}/login`, credentials);
    return response.data;
  } catch (error: any) {
    if (error.response.data) {
      throw error.response.data.error;
    }
    else {
      throw error.message;
    }
  }
};

export const registerApi = async (credentials:Credentials) => {
  try {
    const response = await axios.post(`${API_URL}/register`, credentials);
    return response.data;
  } catch (error: any) {
   if (error.response.data) {
      throw error.response.data.error;
    }
    else {
      throw error.message;
    }
  }
};

