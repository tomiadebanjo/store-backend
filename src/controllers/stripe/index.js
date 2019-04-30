import express from 'express';
import StripController from './StripeController';
import AuthValidator from '../../middleware/AuthValidator';
import InputValidator from '../../helpers/InputValidator';
import ErrorValidator from '../../middleware/ErrorValidator';

const stripeRouter = express.Router();

stripeRouter.post(
  '/stripe/charge',
  AuthValidator.validateToken,
  InputValidator.stripeValidator,
  ErrorValidator.check,
  StripController.handlePayment
);

export default stripeRouter;
