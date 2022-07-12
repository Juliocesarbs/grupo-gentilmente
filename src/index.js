import React from 'react';
import ReactDOM from 'react-dom';
import App from './main/App';

import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';

import promise from 'redux-promise'
import thunk from 'redux-thunk'

import reducers from './main/reducers';

const store = applyMiddleware(thunk, promise)(createStore)(reducers);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);


