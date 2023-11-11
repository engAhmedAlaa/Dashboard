import React from 'react';
import ReactDOM from 'react-dom/client';
import ThemeProvider from './context/ThemeContext.tsx';
import AuthProvider from './context/AuthContext.tsx';
import App from './App.tsx';
import './styles/globals.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>
);
