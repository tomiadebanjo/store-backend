import ShoppingCartService from '../../services/ShoppingCartService';
import ShippingService from '../../services/ShippingService';
import TaxService from '../../services/TaxService';
import OrderService from '../../services/OrderService';

class OrderController {
  static async create(req, res, next) {
    try {
      const { body: { shipping_id, tax_id }, session: { cartId }, decoded: { customer_id } } = req;
      const [cart] = await Promise.all([
        ShoppingCartService.fetchShoppingCart(cartId),
        ShippingService.getShippingTypeDetailsById(shipping_id),
        TaxService.fetchTaxDetailsById(tax_id)
      ]);

      const subTotal = cart.reduce((acc, item) => {
        const { product: { price, discounted_price }, quantity } = item;
        let actualPrice = +price;

        if (discounted_price > 0.00) {
          actualPrice = +discounted_price;
        }
        const finalPrice = actualPrice * quantity;
        return acc + finalPrice;
      }, 0);

      const newOrder = await OrderService.createOrder({
        customer_id,
        shipping_id,
        tax_id,
        cart,
        cart_id: cartId,
        total_amount: subTotal,
      });

      return res.status(201).send({
        orderDetails: newOrder
      });
    } catch (error) {
      next(error);
    }
  }

  static async getOrderDetails(req, res, next) {
    try {
      const { params: { order_id }, decoded: { customer_id } } = req;
      const details = await OrderService.fetchOrderInfo({ order_id, customer_id });

      return res.status(201).send(details);
    } catch (error) {
      next(error);
    }
  }
}

export default OrderController;
