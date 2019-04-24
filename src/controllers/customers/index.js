import express from 'express';
import CustomerController from './CustomerController';
import InputValidator from '../../helpers/InputValidator';
import ErrorValidator from '../../middleware/ErrorValidator';
import AuthValidator from '../../middleware/AuthValidator';
import HelperUtility from '../../middleware/HelperUtility';


const customerRouter = express.Router();

customerRouter.put(
  '/customer',
  AuthValidator.validateToken,
  InputValidator.customerDetailsValidator(),
  ErrorValidator.check,
  CustomerController.updateCustomer
);

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

customerRouter.put(
  '/customers/creditCard',
  AuthValidator.validateToken,
  InputValidator.creditCardValidator(),
  ErrorValidator.check,
  HelperUtility.filterRequestBody,
  CustomerController.updateCustomer
);

customerRouter.put(
  '/customers/address',
  AuthValidator.validateToken,
  InputValidator.addressValidator(),
  ErrorValidator.check,
  HelperUtility.filterRequestBody,
  CustomerController.updateCustomer
);

export default customerRouter;
