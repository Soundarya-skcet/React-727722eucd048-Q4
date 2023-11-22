import React, { useState, useEffect } from 'react';
import './App.css';

function Timer({ initialSeconds }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalID;

    if (isRunning) {
      intervalID = setInterval(() => {
        setSeconds((prevSeconds) => (prevSeconds > 0 ? prevSeconds - 1 : 0));
      }, 1000);
    }

    return () => clearInterval(intervalID);
  }, [isRunning]);

  const startTimer = () => {
    setIsRunning(true);
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setSeconds(initialSeconds);
    setIsRunning(false);
  };

  return (
    <div className="timer">
      <p>Time:{seconds} Seconds</p>
      <div>
        <button onClick={startTimer} disabled={isRunning} style={{ background: 'green' }}>
          Start
        </button>
        <button onClick={stopTimer} disabled={!isRunning} style={{ background: 'red' }}>
          Stop
        </button>
        <button onClick={resetTimer} style={{ background: 'blue' }}>
          Reset
        </button>
      </div>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Timer initialSeconds={3} />
      </header>
    </div>
  );
}

export default App;