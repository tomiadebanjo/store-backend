import stripe from 'stripe';
import OrderService from '../../services/OrderService';

const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripePay = stripe(stripeKey);

class StripeController {
  static async handlePayment(req, res, next) {
    try {
      const { body: { stripeToken, order_id } } = req;

      const order = await OrderService.fetchOrderInfo(order_id);
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

      // If successful send an order confirmation email with Sendgrid and change order status to paid
      res.status(200).send(result);
    } catch (error) {
      next(error);
    }
  }
}

export default StripeController;
