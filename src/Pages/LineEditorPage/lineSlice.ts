import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IDeparture, ILine } from 'interfaces/line';
import { v4 as uuidv4 } from 'uuid';

export const initialState: ILine = {
  entry: '',
  destination: '',
  description: '',
  timetable: [],
};

const sortTimetable = (timetable: IDeparture[]) =>
  timetable.sort((a, b) => a.time.hours * 60 + a.time.mins - (b.time.hours * 60 + b.time.mins));

const lineSlice = createSlice({
  name: 'line',
  initialState,
  reducers: {
    changeEntry(store, { payload }: PayloadAction<string>) {
      store.entry = payload;
    },
    changeDestination(store, { payload }: PayloadAction<string>) {
      store.destination = payload;
    },
    changeDescription(store, { payload }: PayloadAction<string>) {
      store.description = payload;
    },
    addDeparture(store, { payload }: PayloadAction<Omit<IDeparture, 'id'>>) {
      store.timetable.push({ ...payload, id: uuidv4() });
      sortTimetable(store.timetable);
    },
    removeDeparture(store, { payload }: PayloadAction<string>) {
      store.timetable = store.timetable.filter((x) => x.id !== payload);
    },
  },
});

export const { changeEntry, changeDestination, changeDescription, addDeparture, removeDeparture } = lineSlice.actions;

const lineReducer = lineSlice.reducer;
export default lineReducer;
