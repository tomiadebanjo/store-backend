import products from '../controllers/products';
import customers from '../controllers/customers';
import attributes from '../controllers/attributes';

const routes = (app) => {
  app.use(products);
  app.use(customers);
  app.use(attributes)
  return app;
};

export default routes;
