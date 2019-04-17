import models from '../database/models';
import PaginationHelper from '../helpers/PaginationHelper';

const { product, category } = models;
const productAttributes = ['product_id', 'name', 'description', 'price', 'discounted_price', 'thumbnail'];

class ProductService {
  static async fetchAndCountProducts({ page, limit }) {
    const paginationQuery = PaginationHelper.paginate(page, limit);
    const result = await product.findAndCountAll({
      ...paginationQuery,
      attributes: productAttributes,
      raw: true
    });

    return result;
  }

  static async fetchProductsByCategory({ page, limit, category_id }) {
    const paginationQuery = PaginationHelper.paginate(page, limit);
    const products = await product.findAndCountAll({
      include: [{
        model: category,
        as: 'Category',
        where: {
          category_id
        },
        attributes: []
      }],
      ...paginationQuery,
      attributes: productAttributes,
      raw: true
    });

    return products;
  }
}

export default ProductService;
