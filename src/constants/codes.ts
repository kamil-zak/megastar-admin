enum CODES {
  NOCONNECTION = '-1',
  DEFAULT = '0',
  UNAUTHENTICATED = '1',
  //  UNAUTHORIZED = '2',
  //  NOTOKEN = '3',
  //  LOGIN = '4',
  BADREQUESST = '5',
  NOTFOUND = '6',
  //  VALIDATION = '7',
  //  UPLOAD = '10',
  //  USED_FORECLOSURE = '11',
  //  NOT_EXISTING_FORECLOSURE = '12',
}

export const silentCodes = [CODES.UNAUTHENTICATED];

export default CODES;
