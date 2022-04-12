import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { IAlbumInfo } from 'interfaces/album';
import albumService from 'services/albumService';
import moveItem from 'utils/moveItem';

const initialState = null as IAlbumInfo[] | null;

export const fetchAlbums = createAsyncThunk('albums/fetchAll', albumService.getAll);
export const getAlbum = createAsyncThunk('albums/getOne', albumService.getOne);
export const removeAlbum = createAsyncThunk('album/remove', albumService.remove);
export const saveAlbum = createAsyncThunk('albums/save', albumService.save);
export const moveAlbum = createAsyncThunk('albums/move', albumService.move);

const albumsSlice = createSlice({
  name: 'albums',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAlbums.fulfilled, (state, { payload }) => payload);

    builder.addCase(removeAlbum.fulfilled, (state, action) =>
      (state || []).filter((album) => album._id !== action.meta.arg),
    );

    builder.addCase(saveAlbum.fulfilled, (state, { payload }) => {
      if (!state || !payload._id) return state;
      const { _id, name, photos } = payload;
      const album = { _id, name, photos: photos.slice(0, 2) };
      const index = state.findIndex((item) => item._id === album._id);
      if (index >= 0) state[index] = album;
      else state.push(album);
    });

    builder
      .addCase(moveAlbum.pending, (state, { meta }) => (state = moveItem(state || [], meta.arg)))
      .addCase(moveAlbum.rejected, (state, { meta }) =>
        moveItem(state || [], { item: meta.arg.destination, destination: meta.arg.item }),
      );
  },
});

export default albumsSlice.reducer;
