import React from 'react';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import ProtectedPage from './components/ProtectedPage';
import backgroundImage from './assets/back.jpg'; // Adjust the path to your image

function App() {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',  // Full height of the viewport
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 0,  // Prevents any margin around the body
      }}
    >
      <h1 style={{ color: 'grey', marginBottom: '5%', textAlign: 'center', marginTop: '5%' }}>
        Authentication App
      </h1>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '50px', marginBottom: '5%' }}>
        <div
          style={{
            width: '400px',
            padding: '2rem',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <SignUp />
        </div>
        <div
          style={{
            width: '400px',
            padding: '2rem',
            borderRadius: '8px',
            background: 'rgba(255, 255, 255, 0.8)',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          }}
        >
          <SignIn />
        </div>
      </div>
      <ProtectedPage />
    </div>
  );
}

export default App;
