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
  const { statusCode, data, message } = err;
  const code = statusCode || 500;
  const errorMessage = message;

  console.error(err.stack);
  if (data) {
    return res.status(code).send({ errors: data });
  }

  return res.status(code).send({ message: errorMessage });
});

const server = app.listen(port, () => console.log(`Server Listening on port ${port}`));

export default server;
