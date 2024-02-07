// main.jsx

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app'; // Import your App component
import './app.css'; // Import your app.css file

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
