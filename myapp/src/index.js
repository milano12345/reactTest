import React from 'react';
import { PhotoProvider } from "../src/components/PhotoProvider";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <PhotoProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </PhotoProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
