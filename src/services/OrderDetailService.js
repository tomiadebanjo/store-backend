import models from '../database/models';

const { order_detail } = models;

class OrderDetailService {
  static async bulkCreateOrderDetail({ cart, orderInfo }) {
    const { order_id } = orderInfo;
    const orderDetails = cart.map((item) => {
      const {
        product_id,
        attributes,
        quantity,
        product: { name: product_name, discounted_price, price }
      } = item;
      const unit_cost = discounted_price > 0.0 ? discounted_price : price;
      return {
        product_id,
        attributes,
        quantity,
        product_name,
        order_id,
        unit_cost
      };
    });

    const result = await order_detail.bulkCreate(orderDetails, { validate: true });

    return result;
  }
}

export default OrderDetailService;
