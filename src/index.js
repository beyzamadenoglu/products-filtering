import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import { Provider } from 'react-redux';

import store from './Store/store.ts';

import './index.css';
import App from './App';


import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
