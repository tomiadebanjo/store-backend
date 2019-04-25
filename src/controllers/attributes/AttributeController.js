import AttributeService from '../../services/AttributeService';

class AttributeController {
  static async getAllAttributes(req, res, next) {
    try {
      const attributes = await AttributeService.fetchAllAttributes();
      res.status(200).send(attributes);
    } catch (error) {
      next(error);
    }
  }

  static async getAttributeValues(req, res, next) {
    try {
      const { params: { attribute_id } } = req;
      const values = await AttributeService.fetchAttributeValuesByAttributeId(attribute_id);
      res.status(200).send(values);
    } catch (error) {
      next(error);
    }
  }

  static async getProductAttributes(req, res, next) {
    try {
      const { params: { product_id } } = req;
      const values = await AttributeService.fetchProductAttributesByProductId(product_id);
      res.status(200).send(values);
    } catch (error) {
      next(error);
    }
  }
}

export default AttributeController;
