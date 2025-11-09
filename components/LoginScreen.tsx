import React, { useState } from 'react';
import { User } from '../types';
import { ALLOWED_USERNAMES } from '../constants';

interface LoginScreenProps {
  onLogin: (user: User) => void;
}

const LoginScreen: React.FC<LoginScreenProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const STUDENT_PASSWORD = 'lumina.akhss';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const trimmedUsername = username.trim().toLowerCase();

    if (!trimmedUsername || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    if (!ALLOWED_USERNAMES.includes(trimmedUsername)) {
      setError('This username is not registered for the test.');
      return;
    }

    if (password === STUDENT_PASSWORD) {
      onLogin({ username: trimmedUsername });
    } else {
      setError('Incorrect password. Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center py-12">
      <div className="w-full max-w-md bg-indigo-800 rounded-lg shadow-xl p-8 space-y-6">
        <div className="text-center">
            <i className="fas fa-user-circle text-5xl text-white"></i>
            <h2 className="mt-4 text-3xl font-extrabold text-white">
                Student Login
            </h2>
            <p className="mt-2 text-sm text-indigo-200">
                Enter your credentials to begin the mock test
            </p>
        </div>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="username" className="text-sm font-medium text-indigo-200">
              Username
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                 <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-user text-indigo-300"></i>
                </div>
                <input
                    id="username"
                    name="username"
                    type="text"
                    autoComplete="username"
                    required
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-indigo-600 bg-indigo-700 text-white rounded-md placeholder-indigo-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    placeholder="e.g., hassan.taj"
                />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="text-sm font-medium text-indigo-200">
              Password
            </label>
            <div className="mt-1 relative rounded-md shadow-sm">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <i className="fas fa-lock text-indigo-300"></i>
                </div>
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="appearance-none block w-full px-3 py-2 pl-10 border border-indigo-600 bg-indigo-700 text-white rounded-md placeholder-indigo-400 focus:outline-none focus:ring-white focus:border-white sm:text-sm"
                    placeholder="••••••••"
                />
            </div>
          </div>
          {error && <p className="text-sm text-yellow-300">{error}</p>}
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-indigo-800 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-800 focus:ring-white transition duration-150 ease-in-out"
            >
              Sign in & Proceed
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginScreen;
