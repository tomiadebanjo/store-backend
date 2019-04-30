import express from 'express';
import OrderController from './OrderController';
import AuthValidator from '../../middleware/AuthValidator';
import InputValidator from '../../helpers/InputValidator';
import ErrorValidator from '../../middleware/ErrorValidator';

const orderRouter = express.Router();

orderRouter.post(
  '/orders',
  AuthValidator.validateToken,
  InputValidator.integerValidator('shipping_id'),
  InputValidator.integerValidator('tax_id'),
  ErrorValidator.check,
  OrderController.create
);

orderRouter.get(
  '/orders/:order_id',
  AuthValidator.validateToken,
  InputValidator.integerValidator('order_id'),
  ErrorValidator.check,
  OrderController.getOrderDetails
);

export default orderRouter;
