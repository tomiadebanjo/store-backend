import express from 'express';
import CustomerController from './CustomerController';
import InputValidator from '../../helpers/InputValidator';
import ErrorValidator from '../../middleware/ErrorValidator';

const customerRouter = express.Router();

customerRouter.post(
  '/customers',
  InputValidator.signUpValidator(),
  ErrorValidator.check,
  CustomerController.signUp
);
customerRouter.post(
  '/customers/login',
  InputValidator.loginValidator(),
  ErrorValidator.check,
  CustomerController.login
);

export default customerRouter;
