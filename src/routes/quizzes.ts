import express from 'express';
import { Response } from 'express';
import quizService from '../services/quizService';
import { QuizQuestion } from '../types';

const router = express.Router();

router.get('/', (_req, res: Response<QuizQuestion[]>) => {
  res.send(quizService.getEntries());
});

router.post('/', (_req, res) => {
  res.send('Saving a quiz question!');
});

export default router;