import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import CounterProvider from './contexts/Counter';

ReactDOM.render(
  <React.StrictMode>
    <CounterProvider>
      <App />
    </CounterProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
