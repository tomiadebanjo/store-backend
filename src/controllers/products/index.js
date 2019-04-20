import express from 'express';
import ProductController from './ProductController';
import ProductValidator from '../../middleware/ProductValidator';
import AuthValidator from '../../middleware/AuthValidator';

const productRouter = express.Router();

// Get all products
productRouter.get('/products', ProductController.getAllProducts);

// Get products by search string
productRouter.get(
  '/products/search',
  AuthValidator.validateToken,
  ProductValidator.validateQuery,
  ProductValidator.validateSearchQuery,
  ProductController.getProductsBySearchString
);

// Get single product details
productRouter.get(
  '/products/:product_id',
  ProductValidator.validateParamId,
  ProductController.getProductDetails
);

// Get products by category
productRouter.get(
  '/products/inCategory/:category_id',
  ProductValidator.validateParamId,
  ProductValidator.validateQuery,
  ProductController.getProductsByCategory
);

// Get products by department
productRouter.get(
  '/products/inDepartment/:department_id',
  ProductValidator.validateParamId,
  ProductValidator.validateQuery,
  ProductController.getProductsByDepartment
);

export default productRouter;
