import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { ILineInfo } from 'interfaces/line';
import moveItem from 'utils/moveItem';
import lineService from 'services/lineService';

const initialState = null as ILineInfo[] | null;

export const fetchLines = createAsyncThunk('lines/fetchAll', lineService.getAll);
export const getLine = createAsyncThunk('lines/getOne', lineService.getOne);
export const removeLine = createAsyncThunk('lines/remove', lineService.remove);
export const saveLine = createAsyncThunk('lines/save', lineService.save);
export const moveLine = createAsyncThunk('lines/move', lineService.move);

const linesSlice = createSlice({
  name: 'lines',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLines.fulfilled, (state, { payload }) => payload);

    builder.addCase(removeLine.fulfilled, (state, action) =>
      (state || []).filter((line) => line._id !== action.meta.arg),
    );

    builder.addCase(saveLine.fulfilled, (state, { payload }) => {
      if (!state || !payload._id) return state;
      const { _id, entry, destination } = payload;
      const line = { _id, entry, destination };
      const index = state.findIndex((item) => item._id === line._id);
      if (index >= 0) state[index] = line;
      else state.push(line);
    });

    builder
      .addCase(moveLine.pending, (state, { meta }) => moveItem(state || [], meta.arg))
      .addCase(moveLine.rejected, (state, { meta }) =>
        moveItem(state || [], { item: meta.arg.destination, destination: meta.arg.item }),
      );
  },
});

export default linesSlice.reducer;
