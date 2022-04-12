import { IDate } from './common';

export interface IFDate extends IDate {
  id: string;
}

export interface IFInterval {
  from: IDate;
  to: IDate;
  id: string;
}

interface IList {
  days: number[];
  dates: IFDate[];
  intervals: IFInterval[];
}

export interface IForeclosureInfo {
  _id: string;
  symbol: string;
  description: string;
}

export interface IForeclosure {
  _id?: string;
  symbol: string;
  description: string;
  list: IList;
}
