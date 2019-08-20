import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Holder from './components/holder';

function App() {
  // Hooks
  const [count, setCount] = useState(0);
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Your count is: {count}</p>
        <div className="button-container">
          <p className="App-link" onClick={() => setCount(count + 1)}>
            Increase Count
          </p>
          <p className="App-link" onClick={() => setItems([...items, count])}>
            Save Count
          </p>
          <p className="App-link" onClick={() => setCount(count - 1)}>
            Decrease Count
          </p>
        </div>

        <Holder item={items} />
      </header>
    </div>
  );
}

export default App;
