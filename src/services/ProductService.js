import models from '../database/models';
import HttpError from '../helpers/ErrorHandler';

const { product } = models;

class ProductService {
  static async fetchAllProducts() {
    const products = await product.findAll({ raw: true });

    HttpError.throwErrorIfNullOrEmpty(products, 'No Products Available', 200);
    return products;
  }
}

export default ProductService;
