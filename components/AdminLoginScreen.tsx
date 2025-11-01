import React, { useState } from 'react';

interface AdminLoginScreenProps {
  onAdminLogin: (success: boolean) => void;
}

const AdminLoginScreen: React.FC<AdminLoginScreenProps> = ({ onAdminLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // In a real app, this password would be handled securely on the backend.
  const ADMIN_PASSWORD = 'lumina.council';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setError('');
      onAdminLogin(true);
    } else {
      setError('Incorrect password. Please try again.');
      onAdminLogin(false);
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-xl p-8 space-y-6">
        <div className="text-center">
            <i className="fas fa-user-shield text-5xl text-white"></i>
            <h2 className="mt-4 text-3xl font-extrabold text-white">
                Admin Access
            </h2>
            <p className="mt-2 text-sm text-gray-300">
                Enter the password to view test submissions.
            </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-gray-200">
              Admin Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-key text-gray-400"></i>
                </div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-gray-600 bg-gray-700 text-white rounded-md placeholder-gray-400 focus:outline-none focus:ring-indigo-600 focus:border-indigo-600 sm:text-sm"
                    placeholder="••••••••"
                />
            </div>
          </div>
          {error && <p className="text-sm text-red-400">{error}</p>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-600 transition duration-150 ease-in-out"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginScreen;