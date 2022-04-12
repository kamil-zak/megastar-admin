/* eslint-disable @typescript-eslint/no-explicit-any */
import { AsyncThunk } from '@reduxjs/toolkit';
import { isRejectedAction } from 'interfaces/common';
import { useCallback, useEffect, useState } from 'react';
import { useAppDispatch } from 'store/store';

type ReturnData<T> = [() => void, { loading: boolean; error: Error | null; response: T | null; loaded: boolean }];

function useAsyncThunk<T>(asyncThunk: AsyncThunk<T, void, any>): ReturnData<T>;
function useAsyncThunk<T, W>(asyncThunk: AsyncThunk<T, W, any>, data: W): ReturnData<T>;

function useAsyncThunk<T, W>(asyncThunk: AsyncThunk<T, W, any>, data?: W): ReturnData<T> {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [response, setResponse] = useState<T | null>(null);
  const [loaded, setLoaded] = useState(false);

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!loading) return;
    setError(null);
    const thunk = dispatch(asyncThunk(data as W));
    thunk.then((action) => {
      if (isRejectedAction(action)) {
        if (action.error.name === 'AbortError') return;
        setError(action.error as Error);
        setLoading(false);
        return;
      }
      setResponse(action.payload as T);
      setLoaded(true);
      setLoading(false);
    });
    return () => thunk.abort();
  }, [asyncThunk, data, dispatch, loading]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const send = useCallback(() => setLoading(true), [data]);

  return [send, { loading, error, response, loaded }];
}

export default useAsyncThunk;
