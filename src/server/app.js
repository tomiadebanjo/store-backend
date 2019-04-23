import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import routes from '../routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 6600;

app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello');
});

routes(app);

app.use((err, req, res, next) => {
  const code = err.statusCode || 500;
  const error = { errors: err.data } || err;

  console.error(err.stack);
  res.status(code).send(error);
});

const server = app.listen(port, () => console.log(`Server Listening on port ${port}`));

export default server;
