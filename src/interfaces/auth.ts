import CODES from 'constants/codes';

export interface ISignInData {
  login: string;
  password: string;
}

export interface ISignInResponse {
  token: string;
  refreshToken: string;
}

export interface ICheckLoginResponse {
  login: string;
}

export interface IErrorResponse {
  error: { message: string; code: CODES };
}

export interface IRefreshResponse {
  token: string;
}
