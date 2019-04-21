import { body } from 'express-validator/check';
import { sanitizeBody } from 'express-validator/filter';

class InputValidator {
  static signUpValidator() {
    return [
      sanitizeBody(['password', 'name', 'email']).trim(),
      body('name').exists().withMessage('name is required')
        .isLength({ min: 3 })
        .withMessage('Minimum length is 3')
        .not()
        .matches(/\d/g)
        .withMessage('Name cannot contain numbers'),
      body('email').exists().withMessage('email is required')
        .isEmail()
        .withMessage('A valid email is required'),
      ...InputValidator.passwordValidation()
    ];
  }

  static emailValidation() {
    return [
      body('email').exists().withMessage('email is required')
        .isEmail()
        .withMessage('A valid email is required')
    ];
  }

  static passwordValidation() {
    return [
      body('password').exists().withMessage('password is required')
        .isLength({ min: 5 })
        .withMessage('Minimum length is 5')
        .not()
        .matches(/\s/g)
        .withMessage('Spaces are not allowed')
    ]
  }
}

export default InputValidator;
