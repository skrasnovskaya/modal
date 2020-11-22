import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { configureStore, MiddlewareArray } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';

import { rootSaga } from './sagas';
import { rootReducer } from './store';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const api = {}; //Fake api

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: new MiddlewareArray().concat(
    sagaMiddleware,
    // routerMiddleware, etc.
  ),
  devTools: process.env.NODE_ENV !== 'production',
});

sagaMiddleware.run(rootSaga, { api });

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
