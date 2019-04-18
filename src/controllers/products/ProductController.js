import ProductService from '../../services/ProductService';
import ProductHelpers from '../../helpers/ProductHelpers';
import HttpError from '../../helpers/ErrorHandler';

class ProductController {
  static async getAllProducts(req, res) {
    try {
      const {
        query: { page, limit, description_length }
      } = req;
      const requiredPage = page || 1;
      const requiredLimit = limit || 20;
      const descriptionLength = description_length || 200;

      const { rows, count } = await ProductService.fetchAndCountProducts({
        page: requiredPage,
        limit: requiredLimit
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
        rows: products
      });
    } catch (error) {
      return HttpError.sendErrorResponse(error, res);
    }
  }

  static async getProductsByCategory(req, res) {
    try {
      const {
        params: { category_id },
        query: { page, limit, description_length }
      } = req;
      const requiredPage = page || 1;
      const requiredLimit = limit || 20;
      const descriptionLength = description_length || 200;

      const { rows, count } = await ProductService.fetchProductsByCategory({
        page: requiredPage,
        limit: requiredLimit,
        category_id
      });

      if (rows && rows.length < 1) {
        return res.status(200).json({
          message: 'There are no products in this category',
          count,
          rows
        });
      }

      const products = await ProductHelpers.formatData(rows, descriptionLength);
      return res.status(200).send({
        count,
        rows: products
      });
    } catch (error) {
      return HttpError.sendErrorResponse(error, res);
    }
  }

  static async getProductsByDepartment(req, res) {
    try {
      const {
        params: { department_id },
        query: { page, limit, description_length }
      } = req;
      const requiredPage = page || 1;
      const requiredLimit = limit || 20;
      const descriptionLength = description_length || 200;

      const { rows, count } = await ProductService.fetchProductsByDepartment({
        page: requiredPage,
        limit: requiredLimit,
        department_id
      });

      if (rows && rows.length < 1) {
        return res.status(200).json({
          message: 'There are no products in this department',
          count,
          rows
        });
      }

      const products = await ProductHelpers.formatData(rows, descriptionLength);
      return res.status(200).send({
        count,
        rows: products
      });
    } catch (error) {
      return HttpError.sendErrorResponse(error, res);
    }
  }

  static async getProductsBySearchString(req, res) {
    try {
      const {
        query: {
          page, limit, description_length, query_string
        }
      } = req;
      const requiredPage = page || 1;
      const requiredLimit = limit || 20;
      const descriptionLength = description_length || 200;

      const { rows, count } = await ProductService.fetchProductsBySearchKeyword(
        {
          page: requiredPage,
          limit: requiredLimit,
          query_string: query_string.trim()
        }
      );

      if (rows && rows.length < 1) {
        return res.status(200).json({
          message: 'Sorry no products match your search keyword',
          count,
          rows
        });
      }

      const products = await ProductHelpers.formatData(rows, descriptionLength);
      return res.status(200).send({
        count,
        rows: products
      });
    } catch (error) {
      return HttpError.sendErrorResponse(error, res);
    }
  }

  static async getProductDetails(req, res) {
    try {
      const { params: { product_id } } = req;

      const product = await ProductService.fetchProductDetails(product_id);

      if (!product) {
        return res.status(200).json({
          message: 'Product not found',
        });
      }

      return res.status(200).send({
        ...product
      });
    } catch (error) {
      return HttpError.sendErrorResponse(error, res);
    }
  }
}

export default ProductController;
