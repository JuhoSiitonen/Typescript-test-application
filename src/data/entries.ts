import { QuizQuestion } from "../types";

const questions: QuizQuestion[] = [
  {
    id: 1,
    question: "What is the capital of France?",
    incorrectAnswers: ["London", "Berlin", "Madrid", "Paris"],
    correctAnswer: "Paris",
    type: "multiple",
  },
  {
    id: 2,
    question: "What is the capital of Spain?",
    incorrectAnswers: ["Paris", "Berlin", "Madrid", "London"],
    correctAnswer: "Madrid",
    type: "multiple",
  },
  {
    id: 3,
    question: "What is the capital of Germany?",
    incorrectAnswers: ["London", "Berlin", "Madrid", "Paris"],
    correctAnswer: "Berlin",
    type: "multiple",
  },
];

export default questions;