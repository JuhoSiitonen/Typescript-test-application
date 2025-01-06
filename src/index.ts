import express from 'express';
import { Response } from 'express';
import quizRouter from './routes/quizzes';

const app = express();
app.use(express.json());

const PORT = 3000;

app.get('/ping', (_req, res: Response<string>) => {
  console.log('someone pinged here');
  res.send('pong');
});

app.use('/api/quizzes', quizRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});