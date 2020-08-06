import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as BumbagProvider } from 'bumbag';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BumbagProvider>
      <App />
    </BumbagProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
