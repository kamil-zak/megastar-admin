import axios, { AxiosError } from 'axios';
import CODES from 'constants/codes';
import ENDPOINTS from 'constants/endpoints';
import { IErrorResponse, IRefreshResponse, isSignInResponse } from 'interfaces/auth';
import BaseError from '../utils/BaseError';
import { getToken, getRefreshToken, updateTokens } from './tokenService';

type AxiosErrorWithRetry = { config: { _retry?: boolean } } & AxiosError<IErrorResponse>;

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = getToken();
    if (config.headers) config.headers['Authorization'] = `Bearer ${token}`;
    return config;
  },
  (err) => {
    return Promise.reject(err);
  },
);

api.interceptors.response.use(
  (response) => {
    if (isSignInResponse(response.data)) updateTokens(response.data);
    return response;
  },
  async (err: AxiosErrorWithRetry) => {
    if (err instanceof axios.Cancel) throw err;
    if (!err.response) throw new BaseError(CODES.NOCONNECTION, 'Nie udało się nawiązać połączenia');
    if (typeof err.response.data === 'string')
      throw new BaseError(CODES.DEFAULT, 'Nie można nawiązać połączenia z serwerem');

    const { code, message } = err.response.data.error;

    if (code === CODES.UNAUTHENTICATED && err.config.url !== ENDPOINTS.REFRESH && !err.config._retry) {
      err.config._retry = true;

      try {
        const { data } = await api.post<IRefreshResponse>(ENDPOINTS.REFRESH, {
          refreshToken: getRefreshToken(),
        });
        updateTokens({ token: data.token });
        return api(err.config);
      } catch (err) {
        throw new BaseError(code, message);
      }
    }

    throw new BaseError(code, message);
  },
);

export default api;
