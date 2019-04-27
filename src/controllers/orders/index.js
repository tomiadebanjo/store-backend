import express from 'express';
import OrderController from './OrderController';
import AuthValidator from '../../middleware/AuthValidator';

const orderRouter = express.Router();

orderRouter.post(
  '/orders',
  AuthValidator.validateToken,
  OrderController.create
);

orderRouter.get(
  '/orders/:order_id',
  AuthValidator.validateToken,
  OrderController.getOrderDetails
);

export default orderRouter;
