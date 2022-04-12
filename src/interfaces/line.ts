export type DepartureType = 'week' | 'saturday' | 'sunday';
export type DepartureDirection = 'destination' | 'entry';

export interface ITime {
  hours: number;
  mins: number;
  foreclosures: string[];
}

export interface IDeparture {
  time: ITime;
  type: DepartureType;
  direction: DepartureDirection;
  id: string;
}

export interface ILineInfo {
  _id: string;
  entry: string;
  destination: string;
}

export interface ILine {
  _id?: string;
  entry: string;
  destination: string;
  description: string;
  timetable: IDeparture[];
}
