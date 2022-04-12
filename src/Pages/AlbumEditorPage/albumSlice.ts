import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IAlbum } from 'interfaces/album';
import { IMoveDetails } from 'interfaces/common';

export const initialState: IAlbum = {
  name: '',
  photos: [],
};

const albumSlice = createSlice({
  name: 'album',
  initialState,
  reducers: {
    changeName(store, { payload }: PayloadAction<string>) {
      store.name = payload;
    },
    addPhoto(store, { payload }: PayloadAction<string>) {
      store.photos.push(payload);
    },
    removePhoto(store, { payload }: PayloadAction<string>) {
      store.photos = store.photos.filter((photo) => photo !== payload);
    },
    changeOrder(store, { payload }: PayloadAction<IMoveDetails>) {
      const index = store.photos.findIndex((item) => item === payload.destination);
      store.photos = store.photos.filter((item) => item !== payload.item);
      store.photos.splice(index, 0, payload.item);
    },
  },
});

export const { changeName, addPhoto, removePhoto, changeOrder } = albumSlice.actions;

const albumReducer = albumSlice.reducer;
export default albumReducer;
