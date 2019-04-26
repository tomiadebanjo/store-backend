import express from 'express';
import ShoppingCartController from './ShoppingCartController';
import InputValidator from '../../helpers/InputValidator';
import ErrorValidator from '../../middleware/ErrorValidator';

const shoppingCartRouter = express.Router();

shoppingCartRouter.post(
  '/shoppingCart/add',
  InputValidator.cartValidator(),
  ErrorValidator.check,
  ShoppingCartController.addProductToCart
);

shoppingCartRouter.get('/shoppingCart', ShoppingCartController.getShoppingCart);

export default shoppingCartRouter;
