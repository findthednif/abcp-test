import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '../src/App/App.tsx';

const root = ReactDOM.createRoot(document.querySelector('.root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

