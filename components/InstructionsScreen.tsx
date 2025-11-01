import React from 'react';

interface InstructionsScreenProps {
  onStartTest: () => void;
}

const InstructionsScreen: React.FC<InstructionsScreenProps> = ({ onStartTest }) => {
  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-xl p-8">
      <div className="text-center mb-6">
        <i className="fas fa-book-open text-5xl text-indigo-600"></i>
        <h2 className="mt-4 text-3xl font-extrabold text-gray-900">
          Test Instructions
        </h2>
        <p className="mt-2 text-md text-gray-600">
          Please read the following instructions carefully before you begin.
        </p>
      </div>
      <div className="space-y-4 text-gray-700">
        <div className="flex items-start space-x-3">
          <i className="fas fa-list-ol mt-1 text-indigo-700"></i>
          <p>The test consists of <strong>60 multiple-choice questions</strong> covering Math, Science, English, and Urdu.</p>
        </div>
        <div className="flex items-start space-x-3">
          <i className="fas fa-clock mt-1 text-indigo-700"></i>
          <p>The total duration of the test is <strong>80 minutes</strong>. A timer will be displayed at the top of the screen.</p>
        </div>
        <div className="flex items-start space-x-3">
          <i className="fas fa-check-circle mt-1 text-indigo-700"></i>
          <p>Each question has four options. You must select only <strong>one</strong> correct option.</p>
        </div>
         <div className="flex items-start space-x-3">
          <i className="fas fa-mouse-pointer mt-1 text-indigo-700"></i>
          <p>You can navigate between questions using the 'Next' and 'Previous' buttons, or by clicking the question number in the navigation panel.</p>
        </div>
        <div className="flex items-start space-x-3">
          <i className="fas fa-minus-circle mt-1 text-red-500"></i>
          <p>There will be <strong>negative marking</strong>. For every 4 incorrect answers, 1 mark will be deducted from your total score.</p>
        </div>
        <div className="flex items-start space-x-3">
          <i className="fas fa-exclamation-triangle mt-1 text-red-500"></i>
          <p>The test will be submitted automatically when the time runs out. You can also submit it manually by clicking the 'Submit Test' button.</p>
        </div>
        <div className="flex items-start space-x-3">
          <i className="fas fa-power-off mt-1 text-red-500"></i>
          <p>Do not close the browser window or refresh the page during the test, as your progress may be lost.</p>
        </div>
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={onStartTest}
          className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition duration-150 ease-in-out"
        >
          <i className="fas fa-play-circle mr-2"></i>
          Start Test
        </button>
      </div>
    </div>
  );
};

export default InstructionsScreen;