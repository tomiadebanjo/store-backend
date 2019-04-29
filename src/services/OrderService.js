import models from '../database/models';
import OrderDetailService from './OrderDetailService';
import ShoppingCartService from './ShoppingCartService';
import HttpError from '../helpers/ErrorHandler';

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

  static async fetchOrderInfo({ order_id, customer_id }) {
    const orderDetails = await orders.findOne({
      where: { customer_id, order_id },
      include: [order_detail, shipping, tax]
    });

    HttpError.throwErrorIfNullOrEmpty(orderDetails, 'Order not found');
    return orderDetails;
  }
}

export default OrderService;
