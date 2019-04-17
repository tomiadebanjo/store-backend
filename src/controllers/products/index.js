import express from 'express';
import ProductController from './ProductController';

const productRouter = express.Router();

productRouter.get('/products', ProductController.getAllProducts);
productRouter.get('/products/inCategory/:category_id', ProductController.getProductsByCategory);

export default productRouter;
