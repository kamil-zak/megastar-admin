import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import CODES from 'constants/codes';
import { isRejectedAction } from 'interfaces/common';
import authService from 'services/authService';

interface IInitialState {
  user: string | null;
  isChecked: boolean;
}

const initialState: IInitialState = {
  user: null,
  isChecked: false,
};

export const authSignIn = createAsyncThunk('auth/login', authService.signIn);
export const authCheck = createAsyncThunk('auth/check', authService.checkLogin);
export const authLogout = createAsyncThunk('auth/logout', authService.logout);

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(authSignIn.fulfilled, (state, action) => {
      state.user = action.meta.arg.login;
    });

    builder.addCase(authCheck.fulfilled, (state, action) => {
      state.isChecked = true;
      state.user = action.payload.login;
    });
    builder.addCase(authCheck.rejected, (state, action) => {
      state.isChecked = true;
    });

    builder.addCase(authLogout.fulfilled, (state, action) => {
      state.user = null;
    });

    builder.addMatcher(isRejectedAction, (state, { error }) => {
      if (error.code === CODES.UNAUTHENTICATED) state.user = null;
    });
  },
});

export default authSlice.reducer;
