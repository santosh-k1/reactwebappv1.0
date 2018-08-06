import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './AppScript/Services/registerServiceWorker';
import { BrowserRouter } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Content/Themes/Themes1/css/main.css';

ReactDOM.render(
  <BrowserRouter>
  <App />
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker();
