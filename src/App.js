// src/App.js
import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProtectedPage from './components/ProtectedPage';

function App() {
  return (
      <div className="App">
          <h1 style={{ color: 'grey', marginBottom: '5%', textAlign: 'center', marginTop: '5%' }}>
              Authentication App
          </h1>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '100px', marginBottom: '5%' }}>
              <SignUp />
              <SignIn />
          </div>
          <ProtectedPage />
      </div>
  );
}

export default App;

