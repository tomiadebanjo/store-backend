import express from 'express';
import ProductController from './ProductController';

const productRouter = express.Router();

productRouter.get('/products', ProductController.getAllProducts);

export default productRouter;
