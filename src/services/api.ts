import axios, { AxiosError } from 'axios';
import CODES from 'constants/codes';
import ENDPOINTS from 'constants/endpoints';
import { IErrorResponse } from 'interfaces/auth';
import BaseError from '../utils/BaseError';
import { getToken, setToken } from './tokenService';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(
  async (config) => {
    if (!config.url?.startsWith('/auth')) {
      const token = await getToken();
      if (!token) throw new BaseError(CODES.UNAUTHENTICATED);
      if (config.headers) config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

api.interceptors.response.use(
  (response) => {
    if (response.config.url === ENDPOINTS.LOGIN) setToken(response.data.token);
    return response;
  },
  async (err: AxiosError<IErrorResponse>) => {
    if (err instanceof axios.Cancel) throw err;
    if (err.code === CODES.UNAUTHENTICATED) throw err;
    if (!err.response) throw new BaseError(CODES.NOCONNECTION, 'Nie udało się nawiązać połączenia');
    if (typeof err.response.data === 'string')
      throw new BaseError(CODES.DEFAULT, 'Nie można nawiązać połączenia z serwerem');

    const { code, message } = err.response.data.error;
    throw new BaseError(code, message);
  },
);

export default api;
