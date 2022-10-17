import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// add ! when sure it is never null
// https://stackoverflow.com/questions/63520680/argument-of-type-htmlelement-null-is-not-assignable-to-parameter-of-type-el
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
