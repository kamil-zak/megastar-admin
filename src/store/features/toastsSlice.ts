import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { silentCodes } from 'constants/codes';
import { isBaseError, isRejectedAction } from 'interfaces/common';
import { v4 as uuidv4 } from 'uuid';

interface IToast {
  type: 'success' | 'error';
  text: string;
}

export type ToastWithId = IToast & { id: string };

const initialState = [] as ToastWithId[];

const toastsSlice = createSlice({
  name: 'toasts',
  initialState,
  reducers: {
    showToast(state, { payload }: PayloadAction<IToast>) {
      state.push({ ...payload, id: uuidv4() });
    },
    removeToast(state, { payload }: PayloadAction<string>) {
      return state.filter((toast) => toast.id !== payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(isRejectedAction, (state, { error }) => {
      if (!isBaseError(error) || silentCodes.includes(error.code)) return;
      state.push({ text: error.message, type: 'error', id: uuidv4() });
    });
  },
});

export const { showToast, removeToast } = toastsSlice.actions;

export default toastsSlice.reducer;
