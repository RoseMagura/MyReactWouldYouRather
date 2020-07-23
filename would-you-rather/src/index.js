import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
  } from "react-router-dom";
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'; 
import middleware from './middleware';
import Homepage from './components/Homepage';

const store = createStore(reducer, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,  
  document.getElementById('root')
);