import Sequelize from 'sequelize';
import models from '../database/models';
import PaginationHelper from '../helpers/PaginationHelper';

const { Op } = Sequelize;
const { product, category } = models;
const productAttributes = [
  'product_id',
  'name',
  'description',
  'price',
  'discounted_price',
  'thumbnail'
];

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
      include: [
        {
          model: category,
          as: 'Category',
          where: {
            category_id
          },
          attributes: []
        }
      ],
      ...paginationQuery,
      attributes: productAttributes,
      raw: true
    });

    return products;
  }

  static async fetchProductsByDepartment({ page, limit, department_id }) {
    const paginationQuery = PaginationHelper.paginate(page, limit);

    const products = await product.findAndCountAll({
      include: [
        {
          model: category,
          as: 'Category',
          where: {
            department_id
          },
          attributes: []
        }
      ],
      ...paginationQuery,
      attributes: productAttributes,
      raw: true
    });

    return products;
  }

  static async fetchProductsBySearchKeyword({ page, limit, query_string }) {
    const paginationQuery = PaginationHelper.paginate(page, limit);

    const result = await product.findAndCountAll({
      ...paginationQuery,
      attributes: productAttributes,
      raw: true,
      where: {
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${query_string}%`
            }
          },
          {
            description: {
              [Op.like]: `%${query_string}%`
            }
          }
        ]
      }
    });

    return result;
  }

  static async fetchProductDetails(product_id) {
    const result = await product.findByPk(+product_id, { raw: true });
    return result;
  }
}

export default ProductService;
