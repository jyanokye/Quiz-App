export type QuizQuestion = {
    question: string;
    options: string[];
    answer: string;
  };
  
  export type QuizData = {
    title: string;
    icon: string;
    questions: QuizQuestion[];
  };
  
  export type QuizzesData = {
    quizzes: QuizData[];
  };
  