import express from 'express';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send('Fetching all quizzes!');
});

router.post('/', (_req, res) => {
  res.send('Saving a quiz question!');
});

export default router;