import { IRefreshResponse } from 'interfaces/auth';
import jwtDecode from 'jwt-decode';
import api from './api';

const payload: { token: null | string; exp: number } = {
  token: null,
  exp: 0,
};

export const setToken = (token: string | null) => {
  if (!token) {
    payload.token = null;
    payload.exp = 0;
    return;
  }

  try {
    const data = jwtDecode(token) as { exp: number };
    payload.token = token;
    payload.exp = data.exp;
  } catch {
    payload.token = null;
    payload.exp = 0;
  }
};

let refreshPromise: Promise<string | null> | null = null;

const refresh = async () => {
  try {
    const { data } = await api.get<IRefreshResponse>(`/auth/refresh`);
    setToken(data.token);
    return data.token;
  } catch (err) {
    setToken(null);
    return null;
  }
};

export const getToken = () => {
  const { token, exp } = payload;
  const notExpired = exp > Date.now() / 1000 + 5;
  if (token && notExpired) return Promise.resolve(token);
  if (!refreshPromise) refreshPromise = refresh().finally(() => (refreshPromise = null));
  return refreshPromise;
};
