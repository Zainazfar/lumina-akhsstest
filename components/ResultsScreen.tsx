import React from 'react';
import { Question, Answers } from '../types';

interface ResultsScreenProps {
  score: number;
  totalQuestions: number;
  onRestart: () => void;
  questions: Question[];
  answers: Answers;
}

const ResultsScreen: React.FC<ResultsScreenProps> = ({ score, totalQuestions, onRestart, questions, answers }) => {
  const percentage = totalQuestions > 0 ? Math.round((score / totalQuestions) * 100) : 0;

  const subjectResults = React.useMemo(() => {
    const results: { [key: string]: { correct: number, total: number, incorrect: number, attempted: number } } = {
      'Math': { correct: 0, total: 0, incorrect: 0, attempted: 0 },
      'Science': { correct: 0, total: 0, incorrect: 0, attempted: 0 },
      'English': { correct: 0, total: 0, incorrect: 0, attempted: 0 },
      'Urdu': { correct: 0, total: 0, incorrect: 0, attempted: 0 },
    };

    questions.forEach((q, index) => {
      const subject = q.subject;
      if (results[subject]) {
        results[subject].total++;
        const userAnswer = answers[index];
        if (userAnswer !== undefined) {
          results[subject].attempted++;
          if (userAnswer === q.answer) {
            results[subject].correct++;
          } else {
            results[subject].incorrect++;
          }
        }
      }
    });
    return results;
  }, [questions, answers]);

  const getSubjectStyles = (subject: string) => {
    switch (subject) {
      case 'Math': return { border: 'border-blue-500', text: 'text-blue-600' };
      case 'Science': return { border: 'border-green-500', text: 'text-green-600' };
      case 'English': return { border: 'border-purple-500', text: 'text-purple-600' };
      case 'Urdu': return { border: 'border-orange-500', text: 'text-orange-600' };
      default: return { border: 'border-gray-500', text: 'text-gray-600' };
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <div className="text-center">
        <i className="fas fa-book-open text-6xl text-orange-500 mb-4"></i>
        <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
          Test Completed!
        </h2>
        <p className="text-lg text-gray-600 mb-6">Keep practicing!</p>
      </div>

      <hr className="my-6" />

      <div className="bg-white rounded-lg py-6 flex justify-around items-center text-center">
        <div>
          <p className="text-sm font-medium text-gray-500 tracking-wider">SCORE</p>
          <p className="text-4xl font-bold text-indigo-700">{score} / {totalQuestions}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 tracking-wider">PERCENTAGE</p>
          <p className="text-4xl font-bold text-indigo-700">{percentage}%</p>
        </div>
      </div>

      <hr className="my-6" />

      {/* Section-wise performance */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Subject-wise Performance</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* FIX: Use Object.keys to iterate over subjectResults to ensure proper typing for `res`.
              Object.entries can incorrectly infer the value type as `unknown` for objects with index signatures. */}
          {Object.keys(subjectResults).map((subject) => {
            const res = subjectResults[subject];
            const styles = getSubjectStyles(subject);
            return (
              <div key={subject} className={`bg-white rounded-lg shadow-md p-4 border-l-4 ${styles.border}`}>
                <h4 className={`text-xl font-bold ${styles.text}`}>{subject}</h4>
                <div className="mt-3 space-y-1 text-sm text-gray-600">
                    <p className="flex justify-between"><strong>Total Questions:</strong> <span>{res.total}</span></p>
                    <p className="flex justify-between"><strong>Correct Answers:</strong> <span className="text-green-600 font-semibold">{res.correct}</span></p>
                    <p className="flex justify-between"><strong>Incorrect Answers:</strong> <span className="text-red-600 font-semibold">{res.incorrect}</span></p>
                    <p className="flex justify-between"><strong>Unattempted:</strong> <span>{res.total - res.attempted}</span></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <hr className="my-8" />

      {/* Detailed Answer Review */}
      <div>
        <h3 className="text-2xl font-bold text-gray-800 text-center mb-6">Detailed Review</h3>
        <div className="space-y-4 max-h-[60vh] overflow-y-auto pr-4">
          {questions.map((q, index) => {
            const userAnswer = answers[index];
            const isCorrect = userAnswer === q.answer;
            const isAttempted = userAnswer !== undefined;

            let borderColor = 'border-gray-300';
            if (isAttempted) {
              borderColor = isCorrect ? 'border-green-500' : 'border-red-500';
            }

            return (
              <div key={index} className={`p-4 rounded-lg border-l-4 ${borderColor} bg-gray-50`}>
                <p 
                  className={`font-semibold text-gray-800 whitespace-pre-line ${q.subject === 'Urdu' ? 'text-right' : 'text-left'}`}
                  dir={q.subject === 'Urdu' ? 'rtl' : 'ltr'}
                >
                  {index + 1}. {q.question}
                </p>
                <div className="mt-3 text-sm space-y-2">
                   <div className="flex items-center">
                      <i className="fas fa-check-circle text-green-600 w-5"></i>
                      <span className="ml-2 font-semibold">Correct Answer:</span>
                      <span className="ml-2 text-gray-700">{q.answer}</span>
                   </div>
                   {isAttempted ? (
                     <div className="flex items-center">
                       {isCorrect ? (
                         <i className="fas fa-check-circle text-green-600 w-5"></i>
                       ) : (
                         <i className="fas fa-times-circle text-red-600 w-5"></i>
                       )}
                       <span className="ml-2 font-semibold">Your Answer:</span>
                       <span className="ml-2 text-gray-700">{userAnswer}</span>
                     </div>
                   ) : (
                     <div className="flex items-center">
                       <i className="fas fa-minus-circle text-gray-500 w-5"></i>
                       <span className="ml-2 font-semibold">Your Answer:</span>
                       <span className="ml-2 text-gray-500 italic">Not Answered</span>
                     </div>
                   )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-8 text-center">
        <button
          onClick={onRestart}
          className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition duration-150 ease-in-out"
        >
          <i className="fas fa-redo-alt mr-2"></i>
          Take Test Again
        </button>
      </div>
    </div>
  );
};

export default ResultsScreen;