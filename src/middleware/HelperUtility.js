class HelperUtility {
  static filterRequestBody(req, res, next) {
    const {
      body: {
        address_1,
        address_2,
        city,
        region,
        postal_code,
        country,
        credit_card,
        shipping_region_id
      },
      url
    } = req;

    if (url.startsWith('/customers/creditCard')) {
      req.body = { credit_card };
    }
    if (url.startsWith('/customers/address')) {
      req.body = {
        address_1,
        address_2,
        city,
        region,
        postal_code,
        country,
        shipping_region_id
      };
    }

    if (url.startsWith('/customer')) {
      req.body = { ...req.body, password: undefined };
    }

    next();
  }
}

export default HelperUtility;
