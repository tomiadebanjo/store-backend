import GeneralValidator from '../helpers/GeneralValidator';
import ResponseHelper from '../helpers/ResponseHelper';

class ProductValidator {
  static validateQuery(req, res, next) {
    const { query } = req;

    const errors = GeneralValidator.validateIntegersInObject(query);
    return errors.length < 1
      ? next()
      : ResponseHelper.sendResponse(res, 400, { success: false, errors });
  }

  static validateParamId(req, res, next) {
    const {
      params: { category_id, department_id, product_id }
    } = req;

    const parameter = category_id || department_id || product_id;
    let parameter_name = category_id ? 'category_id' : 'department_id';
    if (product_id) {
      parameter_name = 'product_id';
    }

    return GeneralValidator.validateNumber(parameter)
      ? next()
      : ResponseHelper.sendResponse(res, 400, {
        success: false,
        error: `Minimum "${parameter_name}" value is 1`
      });
  }

  static validateSearchQuery(req, res, next) {
    const { query: { query_string } } = req;

    if (!query_string || query_string.trim().length < 1) {
      return ResponseHelper.sendResponse(res, 400, {
        success: false,
        error: '"query_string" is required to search'
      });
    }
    return next();
  }
}

export default ProductValidator;
