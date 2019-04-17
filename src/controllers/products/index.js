import express from 'express';
import ProductController from './ProductController';

const productRouter = express.Router();

// Get all products
productRouter.get('/products', ProductController.getAllProducts);

// Get products by category
productRouter.get(
  '/products/inCategory/:category_id',
  ProductController.getProductsByCategory
);

// Get products by department
productRouter.get(
  '/products/inDepartment/:department_id',
  ProductController.getProductsByDepartment
);

// Get products by search string
// productRouter.get('/products/search', ProductController.getProductsBySearchString);

export default productRouter;
