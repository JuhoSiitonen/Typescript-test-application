import quizData from '../data/entries.json';

import { QuizQuestion } from '../types';

const questions: QuizQuestion[] = quizData as QuizQuestion[];

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