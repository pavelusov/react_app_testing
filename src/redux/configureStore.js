import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';

import reducers from './reducers';

export const middlewares = [ Thunk ];
const createStoreWithMiddleware =
  applyMiddleware(...middlewares)(createStore);

export default createStoreWithMiddleware(reducers);

