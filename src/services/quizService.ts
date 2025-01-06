import quizData from '../data/entries';

import { QuizQuestion } from '../types';

const questions: QuizQuestion[] = quizData;

const getEntries = (): QuizQuestion[] => {
  return questions;
};

const addQuizQuestion = () => {
  return null;
};

export default {
  getEntries,
  addQuizQuestion,
};