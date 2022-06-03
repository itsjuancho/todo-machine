import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App />
);

// Si es necesario, agregar <React.StrictMode></React.StrictMode> al render de App