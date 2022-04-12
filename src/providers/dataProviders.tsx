import React, { FC, useContext } from 'react';
import { createContext } from 'react';
import { ILine } from 'interfaces/line';
import { IForeclosure } from 'interfaces/foreclosure';
import { IAlbum } from 'interfaces/album';

function createProvider<T>() {
  const Context = createContext<T | null>(null);

  const useData = () => {
    const data = useContext(Context);
    if (data === null) throw new Error();
    return data;
  };

  const DataProvider: FC<{ data: T }> = ({ data, children }) => (
    <Context.Provider value={data}>{children}</Context.Provider>
  );

  return [DataProvider, useData] as const;
}

export const [LineProvider, useLine] = createProvider<ILine>();
export const [ForeclosureProvider, useForeclosure] = createProvider<IForeclosure>();
export const [AlbumProvider, useAlbum] = createProvider<IAlbum>();
