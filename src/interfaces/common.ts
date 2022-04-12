/* eslint-disable @typescript-eslint/no-explicit-any */
import { AnyAction, SerializedError } from '@reduxjs/toolkit';
import CODES from 'constants/codes';

export interface IDate {
  day: number;
  month: number;
}

export interface ILoaderController {
  retry: () => void;
  loading: boolean;
  error: Error | null;
}

export interface IFileItem {
  id: string;
  file: File;
}

export interface IMoveDetails {
  item: string;
  destination: string;
}

interface IRejectedAction {
  type: string;
  error: SerializedError;
  meta: {
    aborted: boolean;
  };
}
export function isRejectedAction(action: AnyAction): action is IRejectedAction {
  return action.type.endsWith('rejected');
}

export interface IBaseError {
  message: string;
  code: CODES;
}

export function isBaseError(err: any): err is IBaseError {
  return err && err.code && err.message;
}
