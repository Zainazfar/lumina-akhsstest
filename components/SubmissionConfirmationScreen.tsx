import React from 'react';

interface SubmissionConfirmationScreenProps {
  onRestart: () => void;
}

const SubmissionConfirmationScreen: React.FC<SubmissionConfirmationScreenProps> = ({ onRestart }) => {
  return (
    <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-xl p-8 text-center">
      <i className="fas fa-check-circle text-6xl text-green-500 mb-4"></i>
      <h2 className="text-3xl font-extrabold text-gray-900 mb-2">
        Submission Successful!
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Your test results have been successfully recorded. Thank you for participating.
      </p>

      <div className="bg-gray-50 rounded-lg p-6 my-8">
        <p className="text-gray-600">You may close this window or take the test again.</p>
      </div>
       <button
        onClick={onRestart}
        className="w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600 transition duration-150 ease-in-out"
      >
        <i className="fas fa-redo-alt mr-2"></i>
        Take Another Test
      </button>
    </div>
  );
};

export default SubmissionConfirmationScreen;