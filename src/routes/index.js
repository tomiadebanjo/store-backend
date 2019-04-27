import products from '../controllers/products';
import customers from '../controllers/customers';
import attributes from '../controllers/attributes';
import shoppingCart from '../controllers/shoppingCart';
import orders from '../controllers/orders';

const routes = (app) => {
  app.use(products);
  app.use(customers);
  app.use(attributes);
  app.use(shoppingCart);
  app.use(orders);
  return app;
};

export default routes;
