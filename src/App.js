import React, {useState, useRef} from 'react'
import './App.css';
import { SignInBtn } from './components';
import { Home } from './pages';



function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Home />
      </header>
    </div>
  );
}

export default App;
