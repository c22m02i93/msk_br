import express from 'express';
import cors from 'cors';
import router from './routes/index.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());
app.use('/api', router);

app.get('/', (_req, res) => {
  res.json({ status: 'ok', message: 'Barysh Eparchy API' });
});

app.listen(PORT, () => {
  console.log(`API server running on port ${PORT}`);
});
