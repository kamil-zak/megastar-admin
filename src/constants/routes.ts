const ROUTES = {
  login: '/login',
  timetable: '/timetable',
  lines: '/timetable/lines',
  foreclosures: '/timetable/foreclosures',
  albums: '/albums',
};

export const getThumbUrl = (filename: string) => `${process.env.REACT_APP_FILES_URL}thumb.${filename}`;

export default ROUTES;
