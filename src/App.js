import React from 'react'
import './App.css';
import { UserContextProvider } from './contexts/user';
import { Home } from './pages';



function App() {

  return (
    <div className="App">
      <UserContextProvider>
        <header className="App-header">
          <Home />
        </header>
      </UserContextProvider>
    </div>
  );
}

export default App;
