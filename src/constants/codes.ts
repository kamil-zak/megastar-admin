enum CODES {
  NOCONNECTION = '-1',
  DEFAULT = '0',
  UNAUTHENTICATED = '1',
  LOGIN = '4',
  BADREQUESST = '5',
  NOTFOUND = '6',
}

export const silentCodes = [CODES.UNAUTHENTICATED];

export default CODES;
