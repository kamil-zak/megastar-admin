import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IConfirmData {
  question: string;
  actionName: string;
}

interface IConfirm extends IConfirmData {
  status: 'waiting' | 'accepted' | 'canceled';
}

const initialState = null as null | IConfirm;

const confirmSlice = createSlice({
  name: 'confirms',
  initialState,
  reducers: {
    showConfirm(state, { payload }: PayloadAction<IConfirmData>) {
      return { status: 'waiting', question: payload.question, actionName: payload.actionName };
    },
    hideConfirm(state) {
      return null;
    },
    setConfirmStatus(state, { payload }: PayloadAction<IConfirm['status']>) {
      if (state) state.status = payload;
    },
  },
});

export const { showConfirm, hideConfirm, setConfirmStatus } = confirmSlice.actions;

export default confirmSlice.reducer;
