
import React, { useState, useEffect } from 'react';

interface TimerProps {
  duration: number; // in seconds
  onTimeUp: () => void;
}

const Timer: React.FC<TimerProps> = ({ duration, onTimeUp }) => {
  const [timeLeft, setTimeLeft] = useState(duration);

  useEffect(() => {
    if (timeLeft <= 0) {
      onTimeUp();
      return;
    }

    const intervalId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timeLeft]);

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  const timeColor = timeLeft < 300 ? 'text-red-500' : 'text-gray-800';

  return (
    <div className="flex items-center justify-center space-x-2">
        <i className={`fas fa-stopwatch text-2xl ${timeColor}`}></i>
        <div className={`text-2xl font-mono font-bold ${timeColor}`}>
            <span>{String(minutes).padStart(2, '0')}</span>
            <span>:</span>
            <span>{String(seconds).padStart(2, '0')}</span>
        </div>
        <span className="text-sm text-gray-500">Time Left</span>
    </div>
  );
};

export default Timer;
