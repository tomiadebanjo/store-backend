import products from '../controllers/products';
import customers from '../controllers/customers';

const routes = (app) => {
  app.use(products);
  app.use(customers);
  return app;
};

export default routes;
