import models from '../database/models';
import PaginationHelper from '../helpers/PaginationHelper';

const { product } = models;

class ProductService {
  static async fetchAndCountProducts({ page, limit }) {
    const paginationQuery = PaginationHelper.paginate(page, limit);
    const result = await product.findAndCountAll({
      ...paginationQuery
    });

    return result;
  }
}

export default ProductService;
