import express from 'express';
import { lobster } from '@lobsters/lobster';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/api', (req, res) => {
  res.send({ message: lobster() });
})

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
