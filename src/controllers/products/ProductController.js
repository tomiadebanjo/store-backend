import ProductService from '../../services/ProductService';
import ProductHelpers from '../../helpers/ProductHelpers';
import HttpError from '../../helpers/ErrorHandler';

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const products = await ProductService.fetchAllProducts();
      const formattedProducts = await ProductHelpers.formatData(products);

      return res.status(200).send({
        count: products.length,
        rows: formattedProducts,
      });
    } catch (error) {
      return HttpError.sendErrorResponse(error, res);
    }
  }
}

export default ProductController;
