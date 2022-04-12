import { AnyAction } from 'redux';
import { Reducer, useCallback, useLayoutEffect, useState } from 'react';
import { AsyncThunk } from '@reduxjs/toolkit';
import { useNavigate, useParams } from 'react-router';
import { ILoaderController } from 'interfaces/common';
import useAsyncThunk from './useAsyncThunk';
import CODES from 'constants/codes';
import hasErrorCode from 'utils/hasErrorCode';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const useEditorFetch = <T>(fetchThunk: AsyncThunk<T, string, any>, reducer: Reducer<T, AnyAction>, initialState: T) => {
  const id = useParams().id || '';
  const isNew = !id;
  const [data, setData] = useState(initialState);
  const [modified, setModified] = useState(false);
  const dispatch = useCallback(
    (action: AnyAction) => {
      setData((prev) => reducer(prev, action));
      setModified(true);
    },
    [reducer],
  );

  const [fetch, { error, loading, response }] = useAsyncThunk(fetchThunk, id);

  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (hasErrorCode(error, [CODES.NOTFOUND, CODES.BADREQUESST])) navigate('../');
  }, [error, navigate]);

  useLayoutEffect(() => {
    if (!isNew) fetch();
  }, [fetch, isNew]);

  useLayoutEffect(() => {
    if (response) setData(response);
  }, [response]);

  const fetchController: ILoaderController = { retry: fetch, loading, error };
  const editor = { dispatch, modified, isNew };

  return [data, fetchController, editor] as const;
};

export default useEditorFetch;
