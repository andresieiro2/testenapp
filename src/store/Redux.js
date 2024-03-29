import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import { routerMiddleware } from 'connected-react-router';
import { createHashHistory } from 'history';

import reducers from './Reducers';

import loadingMiddleware from '../middlewares/loading';

export const history = createHashHistory();

export const middlewares = [
  thunk,
  routerMiddleware(history),
  loadingMiddleware,
];

export const store = createStore(
  reducers(history),
  applyMiddleware(...middlewares)
);
