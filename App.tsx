import React, { useState, useCallback } from 'react';
import LoginScreen from './components/LoginScreen';
import InstructionsScreen from './components/InstructionsScreen';
import TestScreen from './components/TestScreen';
import ResultsScreen from './components/ResultsScreen';
import AdminLoginScreen from './components/AdminLoginScreen';
import AdminDashboard from './components/AdminDashboard';
import Header from './components/Header';
import { User, Answers, AppState, Question } from './types';
import { QUESTIONS, ENGLISH_PASSAGE, URDU_PASSAGE } from './constants';
import { submitTest } from './services/api';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>('login');
  const [user, setUser] = useState<User | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [finalAnswers, setFinalAnswers] = useState<Answers | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isAdmin, setIsAdmin] = useState<boolean>(false);

  // Initialize and shuffle questions and subject order
  const [testQuestions] = useState<Question[]>(() => {
    const allQuestions = [...QUESTIONS].slice(0, 60);

    // Generic shuffle function for any array type
    const shuffleArray = <T,>(array: T[]): T[] => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };
    
    // Group questions by subject
    const mathQs = allQuestions.filter(q => q.subject === 'Math');
    const scienceQs = allQuestions.filter(q => q.subject === 'Science');
    const englishQs = allQuestions.filter(q => q.subject === 'English');
    const urduQs = allQuestions.filter(q => q.subject === 'Urdu');
    
    // Shuffle questions within each subject group, respecting comprehension question order
    const shuffledMath = shuffleArray(mathQs);
    const shuffledScience = shuffleArray(scienceQs);
    
    const englishCompQs = englishQs.filter(q => q.question.includes(ENGLISH_PASSAGE));
    const englishStandaloneQs = englishQs.filter(q => !q.question.includes(ENGLISH_PASSAGE));
    const shuffledEnglish = [...englishCompQs, ...shuffleArray(englishStandaloneQs)];
    
    const urduCompQs = urduQs.filter(q => q.question.includes(URDU_PASSAGE));
    const urduStandaloneQs = urduQs.filter(q => !q.question.includes(URDU_PASSAGE));
    const shuffledUrdu = [...urduCompQs, ...shuffleArray(urduStandaloneQs)];

    // Create an array of the subject blocks
    const subjectBlocks: Question[][] = [
      shuffledMath,
      shuffledScience,
      shuffledEnglish,
      shuffledUrdu,
    ];
    
    // Shuffle the order of the subject blocks
    const shuffledSubjectBlocks = shuffleArray(subjectBlocks);

    // Flatten the array to get the final question list
    const finalQuestions = shuffledSubjectBlocks.flat();
    
    // Shuffle the options for each question
    return finalQuestions.map(question => ({
      ...question,
      options: shuffleArray(question.options),
    }));
  });

  const handleLogin = useCallback((loggedInUser: User) => {
    setUser(loggedInUser);
    setAppState('instructions');
  }, []);

  const handleStartTest = useCallback(() => {
    setAppState('test');
  }, []);

  const handleSubmitTest = useCallback(async (submittedAnswers: Answers) => {
    if (!user) return;
    setIsLoading(true);
    try {
      const calculatedScore = await submitTest(user, submittedAnswers, testQuestions);
      setScore(calculatedScore);
      setFinalAnswers(submittedAnswers);
      setAppState('results');
    } catch (error) {
      console.error("Failed to submit test:", error);
      alert("There was an error submitting your test. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }, [user, testQuestions]);

  const handleRestart = useCallback(() => {
    setUser(null);
    setScore(null);
    setFinalAnswers(null);
    setAppState('login');
  }, []);
  
  const handleAdminLogin = useCallback((success: boolean) => {
      if (success) {
          setIsAdmin(true);
          setAppState('adminDashboard');
      } else {
          alert('Incorrect admin password.');
      }
  }, []);

  const handleLogout = useCallback(() => {
    setIsAdmin(false);
    setUser(null);
    setAppState('login');
  }, []);


  const renderContent = () => {
    switch (appState) {
      case 'login':
        return <LoginScreen onLogin={handleLogin} />;
      case 'instructions':
        return <InstructionsScreen onStartTest={handleStartTest} />;
      case 'test':
        return (
          <TestScreen
            questions={testQuestions}
            onSubmit={handleSubmitTest}
            isLoading={isLoading}
          />
        );
      case 'results':
        return score !== null && finalAnswers ? (
            <ResultsScreen
              score={score}
              totalQuestions={testQuestions.length}
              onRestart={handleRestart}
              questions={testQuestions}
              answers={finalAnswers}
            />
        ) : <LoginScreen onLogin={handleLogin} />;
      case 'adminLogin':
        return <AdminLoginScreen onAdminLogin={handleAdminLogin} />;
      case 'adminDashboard':
        return isAdmin ? <AdminDashboard onLogout={handleLogout} /> : <LoginScreen onLogin={handleLogin} />;
      default:
        return <LoginScreen onLogin={handleLogin} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      <Header onAdminClick={() => setAppState('adminLogin')} />
      <main className="container mx-auto p-4 sm:p-6 lg:p-8">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;