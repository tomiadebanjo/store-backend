import products from '../controllers/products';
import customers from '../controllers/customers';
import attributes from '../controllers/attributes';
import shoppingCart from '../controllers/shoppingCart';
import orders from '../controllers/orders';
import stripe from '../controllers/stripe';

const routes = (app) => {
  app.use(products);
  app.use(customers);
  app.use(attributes);
  app.use(shoppingCart);
  app.use(orders);
  app.use(stripe);

  return app;
};

export default routes;
