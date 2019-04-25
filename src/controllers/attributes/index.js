import express from 'express';
import AttributeController from './AttributeController';
import InputValidator from '../../helpers/InputValidator';
import ErrorValidator from '../../middleware/ErrorValidator';

const attributeRouter = express.Router();

attributeRouter.get('/attributes', AttributeController.getAllAttributes);
attributeRouter.get(
  '/attributes/values/:attribute_id',
  InputValidator.integerValidator('attribute_id'),
  ErrorValidator.check,
  AttributeController.getAttributeValues
);
attributeRouter.get(
  '/attributes/inProduct/:product_id',
  InputValidator.integerValidator('product_id'),
  ErrorValidator.check,
  AttributeController.getProductAttributes
);

export default attributeRouter;
