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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isSignInResponse(data: any): data is ISignInResponse {
  return data.token && data.refreshToken;
}
