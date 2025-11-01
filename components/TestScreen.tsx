import React, { useState, useEffect, useCallback } from 'react';
import { Question, Answers } from '../types';
import Timer from './Timer';

interface TestScreenProps {
  questions: Question[];
  onSubmit: (answers: Answers) => void;
  isLoading: boolean;
}

const TestScreen: React.FC<TestScreenProps> = ({ questions, onSubmit, isLoading }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const handleAnswerSelect = (questionIndex: number, answer: string) => {
    setAnswers((prev) => ({ ...prev, [questionIndex]: answer }));
  };

  const handleTimeUp = useCallback(() => {
    alert("Time's up! Your test will now be submitted.");
    onSubmit(answers);
  }, [answers, onSubmit]);

  const handleSubmit = () => {
    onSubmit(answers);
  };
  
  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="flex flex-col lg:flex-row gap-8">
      {/* Main Content: Question and Options */}
      <div className="flex-grow">
        <div className="bg-white rounded-lg shadow-xl p-6 relative">
          <div className="flex justify-between items-center border-b pb-4 mb-4">
             <span className={`px-3 py-1 text-sm font-semibold rounded-full text-white ${
                currentQuestion.subject === 'Math' ? 'bg-blue-500' :
                currentQuestion.subject === 'Science' ? 'bg-green-500' :
                currentQuestion.subject === 'English' ? 'bg-purple-500' : 'bg-orange-500'
             }`}>
                {currentQuestion.subject}
             </span>
             <div className="text-lg font-bold text-gray-700">
               Question {currentQuestionIndex + 1} / {questions.length}
             </div>
          </div>
          
          <div 
             className={`text-2xl font-semibold text-gray-800 mb-8 whitespace-pre-line ${currentQuestion.subject === 'Urdu' ? 'text-right' : 'text-left'}`}
             dir={currentQuestion.subject === 'Urdu' ? 'rtl' : 'ltr'}
          >
            {currentQuestion.question}
          </div>
          
          <div className="space-y-4">
            {currentQuestion.options.map((option, index) => (
              <div
                key={index}
                onClick={() => handleAnswerSelect(currentQuestionIndex, option)}
                className={`flex items-center p-5 border rounded-lg cursor-pointer transition-all duration-200 ${
                  answers[currentQuestionIndex] === option
                    ? 'bg-indigo-100 border-indigo-600 ring-2 ring-indigo-600'
                    : 'bg-gray-50 border-gray-200 hover:bg-gray-100 hover:border-gray-300'
                } ${currentQuestion.subject === 'Urdu' ? 'flex-row-reverse text-right' : ''}`}
              >
                <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mr-4 ${currentQuestion.subject === 'Urdu' ? 'ml-4 mr-0' : ''} ${
                    answers[currentQuestionIndex] === option ? 'border-indigo-600 bg-indigo-600' : 'border-gray-400'
                }`}>
                   {answers[currentQuestionIndex] === option && <i className="fas fa-check text-white text-xs"></i>}
                </div>
                <span className="flex-grow text-gray-700 text-lg">{option}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Buttons */}
        <div className="mt-6 flex justify-between">
          <button
            onClick={() => setCurrentQuestionIndex(prev => Math.max(0, prev - 1))}
            disabled={currentQuestionIndex === 0}
            className="px-6 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <i className="fas fa-arrow-left mr-2"></i>Previous
          </button>
          <button
            onClick={() => setCurrentQuestionIndex(prev => Math.min(questions.length - 1, prev + 1))}
            disabled={currentQuestionIndex === questions.length - 1}
            className="px-6 py-2 bg-white border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next<i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
      </div>
      
      {/* Sidebar: Timer and Navigation Panel */}
      <div className="lg:w-80 flex-shrink-0">
        <div className="sticky top-8 space-y-6">
            <div className="bg-white rounded-lg shadow-xl p-4 text-center">
               <Timer duration={80 * 60} onTimeUp={handleTimeUp} />
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-4">
                <h3 className="font-bold text-lg mb-3 text-center">Question Palette</h3>
                <div className="grid grid-cols-5 sm:grid-cols-7 lg:grid-cols-5 gap-2">
                    {questions.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentQuestionIndex(index)}
                        className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-colors duration-200 ${
                        index === currentQuestionIndex
                            ? 'bg-indigo-700 text-white ring-2 ring-offset-2 ring-indigo-600'
                            : answers[index]
                            ? 'bg-green-500 text-white'
                            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                        }`}
                    >
                        {index + 1}
                    </button>
                    ))}
                </div>
            </div>
             <button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full mt-4 py-3 px-4 bg-red-600 text-white font-bold rounded-lg shadow-md hover:bg-red-700 disabled:bg-red-400 disabled:cursor-wait transition-colors duration-200 flex items-center justify-center"
            >
                {isLoading ? (
                    <><i className="fas fa-spinner fa-spin mr-2"></i>Submitting...</>
                ) : (
                    <><i className="fas fa-flag-checkered mr-2"></i>Submit Test</>
                )}
            </button>
        </div>
      </div>
    </div>
  );
};

export default TestScreen;