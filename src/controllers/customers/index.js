import express from 'express';
import CustomerController from './CustomerController';
import InputValidator from '../../helpers/InputValidator';

const customerRouter = express.Router();

customerRouter.post('/customer', CustomerController.getCustomerInfo);
customerRouter.post('/customers', InputValidator.signUpValidator(), CustomerController.signUp);
customerRouter.post('/customers/login', CustomerController.login);

export default customerRouter;
