import express from 'express';
import CustomerController from './CustomerController';

const customerRouter = express.Router();

customerRouter.post('/customer', CustomerController.getCustomerInfo);
customerRouter.post('/customers', CustomerController.signUp);
customerRouter.post('/customers/login', CustomerController.login);

export default customerRouter;
