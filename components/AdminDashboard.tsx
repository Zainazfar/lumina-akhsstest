import React, { useState, useEffect } from 'react';
import { TestResult } from '../types';

interface AdminDashboardProps {
  onLogout: () => void;
}

const AdminDashboard: React.FC<AdminDashboardProps> = ({ onLogout }) => {
  const [results, setResults] = useState<TestResult[]>([]);
  const [selectedResult, setSelectedResult] = useState<TestResult | null>(null);

  useEffect(() => {
    const storedResults: TestResult[] = JSON.parse(localStorage.getItem('testResults') || '[]');
    // Sort by most recent submission first
    storedResults.sort((a, b) => new Date(b.submittedAt).getTime() - new Date(a.submittedAt).getTime());
    setResults(storedResults);
  }, []);

  const handleExportAll = () => {
    if (results.length === 0) {
      alert("No results to export.");
      return;
    }

    const headers = ['Username', 'Score', 'Total Questions', 'Percentage', 'Submitted At'];
    
    const csvContent = [
      headers.join(','),
      ...results.map(result => {
        const percentage = Math.round((result.score / result.totalQuestions) * 100);
        // Sanitize data for CSV: quote strings that might contain commas
        const username = `"${result.username.replace(/"/g, '""')}"`;
        const submittedAt = `"${new Date(result.submittedAt).toLocaleString()}"`;
        
        return [
          username,
          result.score,
          result.totalQuestions,
          `${percentage}%`,
          submittedAt,
        ].join(',');
      })
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'all_test_results.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };


  const DetailsModal: React.FC<{result: TestResult, onClose: () => void}> = ({result, onClose}) => {
    
    const handleDownloadReport = () => {
      const incorrectAnswers = result.questions
        .map((q, index) => ({
          q,
          index,
          userAnswer: result.answers[index],
          isCorrect: result.answers[index] === q.answer,
        }))
        .filter(item => !item.isCorrect);

      let reportContent = `Incorrect Answers Report for: ${result.username}\n`;
      reportContent += `Date Submitted: ${new Date(result.submittedAt).toLocaleString()}\n`;
      reportContent += `Final Score: ${result.score} / ${result.totalQuestions}\n\n`;
      reportContent += "----------------------------------------\n\n";

      if (incorrectAnswers.length > 0) {
        incorrectAnswers.forEach(({ q, index, userAnswer }) => {
          reportContent += `Q${index + 1}: ${q.question}\n`;
          reportContent += `Subject: ${q.subject}\n`;
          reportContent += `Correct Answer: ${q.answer}\n`;
          reportContent += `Student's Answer: ${userAnswer || 'Not Answered'}\n\n`;
          reportContent += "----------------------------------------\n\n";
        });
      } else {
        reportContent += "No incorrect answers found for this student!\n";
      }

      const blob = new Blob([reportContent], { type: 'text/plain;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', `${result.username.replace(/\s+/g, '_')}_report.txt`);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);
    };

    const incorrectAnswers = result.questions
        .map((q, index) => ({
          question: q,
          userAnswer: result.answers[index],
          isCorrect: result.answers[index] === q.answer,
          index: index
        }))
        .filter(item => !item.isCorrect);


    return (
     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4">
        <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[90vh] flex flex-col">
            <div className="sticky top-0 bg-white p-4 border-b flex justify-between items-center z-10">
                 <h3 className="text-xl font-bold text-gray-800">Incorrect Answers: {result.username}</h3>
                 <div className="flex items-center gap-4">
                    <button 
                        onClick={handleDownloadReport}
                        className="px-3 py-1 bg-indigo-600 text-white font-medium rounded-md hover:bg-indigo-700 text-sm flex items-center gap-2"
                        aria-label="Download incorrect answers report"
                    >
                        <i className="fas fa-download"></i>
                        <span>Download</span>
                    </button>
                    <button onClick={onClose} className="text-gray-500 hover:text-gray-800 text-2xl" aria-label="Close modal">&times;</button>
                 </div>
            </div>
            <div className="overflow-y-auto p-6">
                {incorrectAnswers.length > 0 ? (
                    incorrectAnswers.map(({ question, userAnswer, index }) => (
                        <div key={index} className="p-4 mb-4 border-l-4 rounded-r-lg border-red-500 bg-red-50">
                           <p 
                            className={`font-semibold text-gray-700 whitespace-pre-line ${question.subject === 'Urdu' ? 'text-right' : 'text-left'}`}
                            dir={question.subject === 'Urdu' ? 'rtl' : 'ltr'}
                           >
                            {index + 1}. {question.question}
                           </p>
                           <p className="text-sm mt-2">Correct Answer: <span className="font-bold text-green-700">{question.answer}</span></p>
                           <p className="text-sm text-red-700">
                                Student's Answer: <span className="font-bold">{userAnswer || 'Not Answered'}</span>
                           </p>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10">
                        <i className="fas fa-check-circle text-5xl text-green-500 mb-4"></i>
                        <h4 className="text-xl font-bold text-gray-800">Excellent!</h4>
                        <p className="mt-2 text-gray-600">No incorrect answers found for this student.</p>
                    </div>
                )}
            </div>
        </div>
    </div>
    )
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-xl p-6">
      <div className="flex flex-wrap gap-4 justify-between items-center mb-6">
        <h2 className="text-3xl font-extrabold text-gray-900">Admin Dashboard</h2>
        <div className="flex items-center gap-4">
            <button
                onClick={handleExportAll}
                className="px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 flex items-center gap-2"
                aria-label="Export all results to CSV"
            >
                <i className="fas fa-file-export"></i>
                <span>Export All Results</span>
            </button>
            <button
                onClick={onLogout}
                className="px-4 py-2 bg-red-600 text-white font-medium rounded-md hover:bg-red-700"
            >
                Logout
            </button>
        </div>
      </div>

      {results.length === 0 ? (
        <p className="text-center text-gray-500 py-10">No test submissions found yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Username</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Score</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Percentage</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Submitted At</th>
                <th className="text-left py-3 px-4 uppercase font-semibold text-sm">Actions</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {results.map((result, index) => (
                <tr key={index} className="border-b hover:bg-gray-100">
                  <td className="py-3 px-4">{result.username}</td>
                  <td className="py-3 px-4">{result.score} / {result.totalQuestions}</td>
                  <td className="py-3 px-4">{Math.round((result.score / result.totalQuestions) * 100)}%</td>
                  <td className="py-3 px-4">{new Date(result.submittedAt).toLocaleString()}</td>
                  <td className="py-3 px-4">
                     <button 
                        onClick={() => setSelectedResult(result)}
                        className="bg-indigo-600 text-white px-3 py-1 rounded-md text-sm hover:bg-indigo-700"
                     >
                        View Report
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {selectedResult && <DetailsModal result={selectedResult} onClose={() => setSelectedResult(null)} />}
    </div>
  );
};

export default AdminDashboard;