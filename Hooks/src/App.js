import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // Hooks
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Your count is: {count}</p>
        <div class="button-container">
          <p className="App-link" onClick={() => setCount(count + 1)}>
            Increase Count
          </p>
          <p className="App-link" onClick={() => setCount(count - 1)}>
            Decrease Count
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
