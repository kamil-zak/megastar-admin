import CODES from 'constants/codes';
import { isBaseError } from 'interfaces/common';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const hasErrorCode = (error: any, codes: CODES[]) => {
  if (!isBaseError(error)) return false;
  return codes.some((code) => error.code === code);
};

export default hasErrorCode;
