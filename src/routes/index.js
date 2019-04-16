import products from '../controllers/products';

const routes = (app) => {
  app.use(products);
  return app;
};

export default routes;
