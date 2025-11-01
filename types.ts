export interface User {
  username: string;
  password?: string;
}

export interface Question {
  subject: string;
  question: string;
  options: string[];
  answer: string;
}

export interface Answers {
  [questionIndex: number]: string;
}

export type AppState = 'login' | 'instructions' | 'test' | 'results' | 'adminLogin' | 'adminDashboard';

export interface TestResult {
  username: string;
  score: number;
  totalQuestions: number;
  answers: Answers;
  submittedAt: string;
  questions: Question[];
}