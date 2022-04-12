import { configureStore } from '@reduxjs/toolkit';
import linesReducer from './features/linesSlice';
import foreclosuresReducer from './features/foreclosuresSlice';
import albumsReducer from './features/albumsSlice';
import authReducer from './features/authSlice';
import toastsReducer from './features/toastsSlice';
import confirmReducer from './features/confirmSlice';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const store = configureStore({
  reducer: {
    lines: linesReducer,
    foreclosures: foreclosuresReducer,
    albums: albumsReducer,
    auth: authReducer,
    toasts: toastsReducer,
    confirm: confirmReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
