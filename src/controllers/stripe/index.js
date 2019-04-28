import express from 'express';
import StripController from './StripeController';

const stripeRouter = express.Router();

stripeRouter.post('/stripe/charge', StripController.handlePayment);

export default stripeRouter;
