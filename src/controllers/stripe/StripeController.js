import stripe from 'stripe';
import OrderService from '../../services/OrderService';
import EmailUtil from '../../helpers/EmailUtil';

const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripePay = stripe(stripeKey);

class StripeController {
  static async handlePayment(req, res, next) {
    try {
      const { body: { stripeToken, order_id }, decoded: { email, customer_id } } = req;

      const order = await OrderService.fetchOrderInfo({ order_id, customer_id });

      if (order.status === 1) {
        return res.status(400).send({
          message: 'Order has already been paid for'
        });
      }

      const { total_amount, shipping: { shipping_cost }, tax: { tax_percentage } } = order;

      const subTotal = Number(total_amount) + Number(shipping_cost);
      const tax = subTotal * (tax_percentage / 100);
      const finalAmount = Math.floor((subTotal + tax) * 100);

      const result = await stripePay.charges.create({
        amount: finalAmount,
        currency: 'usd',
        description: `Order #${order_id} Payment`,
        source: stripeToken,
        metadata: { orderId: 1 }
      });

      order.status = 1;
      await order.save();

      await EmailUtil.sendConfirmationMail({ email });

      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}

export default StripeController;
