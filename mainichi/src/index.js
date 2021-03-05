import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import wordsReducer from './reducers/wordsReducer.js'

const store = createStore(wordsReducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
        <App />
    </Provider>,
  document.getElementById('root')
);

