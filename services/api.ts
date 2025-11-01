import { User, Answers, Question, TestResult } from '../types';

// This is a mock API service. In a real application, this would make network requests to a backend.
export const submitTest = (
  user: User,
  answers: Answers,
  questions: Question[]
): Promise<number> => {
  return new Promise((resolve, reject) => {
    // Simulate network latency
    setTimeout(() => {
      try {
        let correctAnswers = 0;
        Object.entries(answers).forEach(([questionIndex, selectedAnswer]) => {
          const index = parseInt(questionIndex, 10);
          if (questions[index] && questions[index].answer === selectedAnswer) {
            correctAnswers++;
          }
        });
        
        const answeredQuestionsCount = Object.keys(answers).length;
        const wrongAnswers = answeredQuestionsCount - correctAnswers;
        const negativeMarks = Math.floor(wrongAnswers / 4);
        const finalScore = correctAnswers - negativeMarks;
        const score = Math.max(0, finalScore);

        const resultPayload: TestResult = {
          username: user.username,
          score: score,
          totalQuestions: questions.length,
          answers,
          submittedAt: new Date().toISOString(),
          questions,
        };
        
        console.log("Submitting test results:", resultPayload);

        // Save results to localStorage for the admin panel
        const existingResults: TestResult[] = JSON.parse(localStorage.getItem('testResults') || '[]');
        existingResults.push(resultPayload);
        localStorage.setItem('testResults', JSON.stringify(existingResults));

        resolve(score);
      } catch (error) {
        console.error("Error during test submission:", error);
        reject(error);
      }
    }, 1500); // 1.5 second delay
  });
};