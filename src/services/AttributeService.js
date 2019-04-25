import models from '../database/models';
import HttpError from '../helpers/ErrorHandler';

const { attribute, attribute_value, product } = models;

class AttributeService {
  static async fetchAllAttributes() {
    const attributes = await attribute.findAll();

    HttpError.throwErrorIfNullOrEmpty(attributes, 'There are no attributes');
    return attributes;
  }

  static async fetchAttributeValuesByAttributeId(id) {
    const attributeValues = await attribute.findAll({
      include: [
        {
          model: attribute_value,
          attributes: ['attribute_value_id', 'value'],
          where: { attribute_id: id }
        }
      ],
      plain: true,
    });

    HttpError.throwErrorIfNullOrEmpty(
      attributeValues,
      'There are no attribute Values'
    );
    return attributeValues;
  }

  static async fetchProductAttributesByProductId(id) {
    const attributeValues = await product.findAll({
      include: [
        {
          model: attribute_value,
          as: 'ProductAttributes',
          include: [
            {
              model: attribute,
              attributes: ['name']
            }
          ],
          attributes: ['value', 'attribute_value_id']
        }
      ],
      where: { product_id: id },
      attributes: [],
      raw: true
    });

    HttpError.throwErrorIfNullOrEmpty(
      attributeValues,
      'There are no attribute Values'
    );

    const filterResult = attributeValues.map(item => ({
      attribute_value: item['ProductAttributes.value'],
      attribute_value_id: item['ProductAttributes.attribute_value_id'],
      attribute_name: item['ProductAttributes.attribute.name']
    }));

    return filterResult;
  }
}

export default AttributeService;
