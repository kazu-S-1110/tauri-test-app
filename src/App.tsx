import React from 'react';
import logo from './logo.svg';
import tauriCircles from './tauri.svg';
import tauriWord from './wordmark.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="inline-logo">
          <img src={tauriCircles} className="App-logo rotate" alt="logo" />
          <img src={tauriWord} className="App-logo smaller" alt="logo" />
        </div>
        <a
          className="App-link"
          href="https://tauri.studio"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn Tauri
        </a>
      </header>
    </div>
  );
}

export default App;
