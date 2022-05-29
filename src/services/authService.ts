import ENDPOINTS from 'constants/endpoints';
import { isBaseError } from 'interfaces/common';
import api from './api';
import { ICheckLoginResponse, ISignInData, ISignInResponse } from 'interfaces/auth';
import CODES from 'constants/codes';
import { setToken } from './tokenService';

const authService = {
  async signIn(signInData: ISignInData) {
    const { data } = await api.post<ISignInResponse>(ENDPOINTS.LOGIN, signInData);
    return data;
  },
  async checkLogin() {
    try {
      const response = await api.get<ICheckLoginResponse>(ENDPOINTS.CHECK);
      return response.data;
    } catch (err) {
      if (isBaseError(err) && err.code === CODES.UNAUTHENTICATED) return { login: null };
      throw err;
    }
  },
  async logout() {
    await api.get(ENDPOINTS.LOGOUT).then(() => setToken(''));
  },
};

export default authService;
