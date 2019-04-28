import models from '../database/models';
import OrderDetailService from './OrderDetailService';
import ShoppingCartService from './ShoppingCartService';

const { orders, order_detail, shipping, tax } = models;

class OrderService {
  static async createOrder({
    total_amount,
    customer_id,
    shipping_id,
    tax_id,
    cart,
    cart_id
  }) {
    const created_on = Date.now();

    const orderInfo = await orders.create({
      total_amount,
      customer_id,
      shipping_id,
      tax_id,
      created_on
    });

    await OrderDetailService.bulkCreateOrderDetail({ cart, orderInfo });
    await ShoppingCartService.emptyShoppingCartByCartId(cart_id);

    return orderInfo;
  }

  static async fetchOrderInfo(order_id) {
    const orderDetails = await orders.findByPk(order_id, {
      include: [order_detail, shipping, tax ]
    });
    return orderDetails;
  }
}

export default OrderService;
