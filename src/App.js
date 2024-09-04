import './App.css';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import Navbar from './components/Navbar'; // Import the Navbar component

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <Router>
          <Navbar /> 
          <AppRoutes />
        </Router>

      </header>
    </div>
  );
}

export default App;
