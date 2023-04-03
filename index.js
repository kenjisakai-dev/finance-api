import express from 'express';
import MovementRoute from './routes/movement.route.js';

const app = express();
app.use(express.json());

app.use('/movements', MovementRoute);

app.listen(3001, () => {
  console.log('API Finance Started!');
});
