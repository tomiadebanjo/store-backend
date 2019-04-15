import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 6600;

app.get('/', (req, res) => res.send('Hello'));

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
