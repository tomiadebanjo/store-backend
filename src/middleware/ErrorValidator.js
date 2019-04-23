import { validationResult } from 'express-validator/check';

class ErrorValidator {
  static check(req, res, next) {
    try {
      validationResult(req).throw();
      next();
    } catch (err) {
      next({ statusCode: 400, data: err.array() });
    }
  }
}

export default ErrorValidator;
