import { IDate } from 'interfaces/common';
import { IDeparture, ITime } from 'interfaces/line';

export const formatTime = (time: ITime) => `${time.hours}:${time.mins.toString().padStart(2, '0')}`;

export const formatDeparture = ({ time }: IDeparture) => `${formatTime(time)}${time.foreclosures.join('')}`;

const dayNames = ['Niedziela', 'Poniedziłek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'];
export const getDayName = (index: number) => dayNames[index];

const monthNames = [
  'stycznia',
  'lutego',
  'marca',
  'kwietnia',
  'maja',
  'czerwca',
  'lipca',
  'sierpnia',
  'września',
  'października',
  'listopada',
  'grudnia',
];
export const getDateString = (date: IDate) => date.day + ' ' + monthNames[date.month];
export const getMonthName = (index: number) => monthNames[index];

const monthLengths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
export const isValidDate = ({ day, month }: IDate) => day > 0 && day <= monthLengths[month];
