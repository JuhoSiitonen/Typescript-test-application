
export type QuestionType = 'multiple' | 'boolean' | 'text';

export interface QuizQuestion {
    question: string;
    type: QuestionType;
    correctAnswer: string;
    incorrectAnswers: string[];
    }