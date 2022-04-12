import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IForeclosureInfo } from 'interfaces/foreclosure';
import foreclosureService from 'services/foreclosureService';
import moveItem from 'utils/moveItem';

const initialState = null as IForeclosureInfo[] | null;

export const fetchForeclosures = createAsyncThunk('foreclosures/fetchAll', foreclosureService.getAll);
export const getForeclosure = createAsyncThunk('foreclosures/getOne', foreclosureService.getOne);
export const removeForeclosure = createAsyncThunk('foreclosures/remove', foreclosureService.remove);
export const saveForeclosure = createAsyncThunk('foreclosures/save', foreclosureService.save);
export const moveForeclosure = createAsyncThunk('foreclosures/move', foreclosureService.move);

const foreclosuresSlice = createSlice({
  name: 'foreclosures',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchForeclosures.fulfilled, (state, { payload }) => payload);

    builder.addCase(removeForeclosure.fulfilled, (state, action) =>
      (state || []).filter((foreclosure) => foreclosure._id !== action.meta.arg),
    );

    builder.addCase(saveForeclosure.fulfilled, (state, { payload }) => {
      if (!state || !payload._id) return state;
      const { _id, symbol, description } = payload;
      const foreclosure = { _id, symbol, description };
      const index = state.findIndex((item) => item._id === foreclosure._id);
      if (index >= 0) state[index] = foreclosure;
      else state.push(foreclosure);
    });

    builder
      .addCase(moveForeclosure.pending, (state, { meta }) => moveItem(state || [], meta.arg))
      .addCase(moveForeclosure.rejected, (state, { meta }) =>
        moveItem(state || [], { item: meta.arg.destination, destination: meta.arg.item }),
      );
  },
});

export default foreclosuresSlice.reducer;
