import express from 'express';
import StripController from './StripeController';
import AuthValidator from '../../middleware/AuthValidator';

const stripeRouter = express.Router();

stripeRouter.post('/stripe/charge', AuthValidator.validateToken, StripController.handlePayment);

export default stripeRouter;
