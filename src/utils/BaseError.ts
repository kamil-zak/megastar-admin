import CODES from 'constants/codes';
import { IBaseError } from 'interfaces/common';

class BaseError extends Error implements IBaseError {
  constructor(public code = CODES.DEFAULT, message = '') {
    super(message);
  }
}

export default BaseError;
