import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import sequelizeStore from 'connect-session-sequelize';
import db from '../database/models';
import routes from '../routes';
import ShoppingCartUtility from '../middleware/ShoppingCartUtility';


dotenv.config();

const app = express();
const port = process.env.PORT || 6600;
const secret = process.env.SECRET;

const SessionStore = sequelizeStore(session.Store);
const myStore = new SessionStore({
  db: db.sequelize
});

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret,
  store: myStore,
  resave: false,
  proxy: true
}));

myStore.sync();

app.use(ShoppingCartUtility.generateCartId);

app.get('/', (req, res) => {
  res.send('Welcome to the e-commerce platform');
});

routes(app);

app.use((err, req, res, next) => {
  const { statusCode, data, message } = err;
  const code = statusCode || 500;
  const errorMessage = message;

  console.error(err.stack);
  if (data) {
    return res.status(code).send({ errors: data });
  }

  return res.status(code).send({ message: errorMessage });
});

app.all('*', (req, res) => res.status(404).send({ message: 'Route not found' }));

const server = app.listen(port, () => console.log(`Server Listening on port ${port}`));

export default server;
