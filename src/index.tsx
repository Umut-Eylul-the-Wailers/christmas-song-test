import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// This is how React 18 renders components
const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
