import express from 'express';
import dotenv from 'dotenv';
import routes from '../routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 6600;

app.get('/', (req, res) => res.send('Hello'));

routes(app);

const server = app.listen(port, () => console.log(`Server Listening on port ${port}`));

export default server;
