import { useLayoutEffect } from 'react';
import { fetchAlbums } from 'store/features/albumsSlice';
import { fetchForeclosures } from 'store/features/foreclosuresSlice';
import { fetchLines } from 'store/features/linesSlice';
import { useAppSelector } from 'store/store';
import useAsyncThunk from './useAsyncThunk';

const fetchThunks = {
  lines: fetchLines,
  foreclosures: fetchForeclosures,
  albums: fetchAlbums,
};

const useStoreController = (type: keyof typeof fetchThunks) => {
  const isLoaded = useAppSelector((store) => !!store[type]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [fetch, { loading, error }] = useAsyncThunk<any>(fetchThunks[type]);

  useLayoutEffect(() => {
    if (!isLoaded) fetch();
  }, [isLoaded, fetch]);

  return { retry: fetch, loading, error };
};

export default useStoreController;
