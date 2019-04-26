import products from '../controllers/products';
import customers from '../controllers/customers';
import attributes from '../controllers/attributes';
import shoppingCart from '../controllers/shoppingCart';

const routes = (app) => {
  app.use(products);
  app.use(customers);
  app.use(attributes);
  app.use(shoppingCart);
  return app;
};

export default routes;
