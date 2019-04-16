import ProductService from '../../services/ProductService';
import ProductHelpers from '../../helpers/ProductHelpers';
import HttpError from '../../helpers/ErrorHandler';

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const { query: { page, limit, description_length } } = req;
      const requiredPage = page || 1;
      const requiredLimit = limit || 20;
      const descriptionLength = description_length || 200;

      const { rows, count } = await ProductService.fetchAndCountProducts({
        page: requiredPage, limit: requiredLimit
      });

      if (rows && rows.length < 1) {
        return res.status(200).json({
          message: 'There are no products available',
          count,
          rows
        });
      }

      const products = await ProductHelpers.formatData(rows, descriptionLength);
      return res.status(200).send({
        count,
        rows: products,
      });
    } catch (error) {
      return HttpError.sendErrorResponse(error, res);
    }
  }
}

export default ProductController;
