
export type QuestionType = 'multiple' | 'boolean' | 'text';

export type NewQuestion = Omit<QuizQuestion, 'id'>;

export interface QuizQuestion {
    id: number;
    question: string;
    type: QuestionType;
    correctAnswer: string;
    incorrectAnswers: string[];
    }