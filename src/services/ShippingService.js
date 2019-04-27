import models from '../database/models';
import HttpError from '../helpers/ErrorHandler';

const { shipping } = models;

class ShippingService {
  static async getShippingTypeDetailsById(shipping_id) {
    const shippingInfo = await shipping.findByPk(shipping_id);

    HttpError.throwErrorIfNullOrEmpty(
      shippingInfo,
      "The shipping_id provided doesn't exist, Please Provide a valid shipping_id"
    );
    return shippingInfo;
  }
}

export default ShippingService;
