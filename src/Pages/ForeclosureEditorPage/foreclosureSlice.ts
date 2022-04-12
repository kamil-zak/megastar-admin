import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IFDate, IForeclosure, IFInterval } from 'interfaces/foreclosure';
import { v4 as uuidv4 } from 'uuid';

export const initialState: IForeclosure = {
  symbol: '',
  description: '',
  list: {
    days: [],
    dates: [],
    intervals: [],
  },
};

const foreclosureSlice = createSlice({
  name: 'foreclosure',
  initialState,
  reducers: {
    changeSymbol(store, { payload }: PayloadAction<string>) {
      store.symbol = payload;
    },
    changeDescription(store, { payload }: PayloadAction<string>) {
      store.description = payload;
    },
    addDay(store, { payload }: PayloadAction<number>) {
      store.list.days.push(payload);
      store.list.days.sort((a, b) => {
        if (a === 0) return 1;
        if (b === 0) return -1;
        return a - b;
      });
    },
    addDate(store, { payload }: PayloadAction<Omit<IFDate, 'id'>>) {
      store.list.dates.push({ ...payload, id: uuidv4() });
      store.list.dates.sort((a, b) => {
        const _a = new Date(2008, a.month, a.day).getTime();
        const _b = new Date(2008, b.month, b.day).getTime();
        return _a - _b;
      });
    },
    addInterval(store, { payload }: PayloadAction<Omit<IFInterval, 'id'>>) {
      store.list.intervals.push({ ...payload, id: uuidv4() });
      store.list.intervals.sort((a, b) => {
        const _a = new Date(2008, a.from.month, a.from.day).getTime();
        const _b = new Date(2008, b.from.month, b.from.day).getTime();
        return _a - _b;
      });
    },
    removeDay(store, { payload }: PayloadAction<number>) {
      store.list.days = store.list.days.filter((x) => x !== payload);
    },
    removeDate(store, { payload }: PayloadAction<string>) {
      store.list.dates = store.list.dates.filter((x) => x.id !== payload);
    },
    removeInterval(store, { payload }: PayloadAction<string>) {
      store.list.intervals = store.list.intervals.filter((x) => x.id !== payload);
    },
  },
});

export const { changeSymbol, changeDescription, addDay, addDate, addInterval, removeDay, removeDate, removeInterval } =
  foreclosureSlice.actions;

const foreclosureReducer = foreclosureSlice.reducer;
export default foreclosureReducer;
