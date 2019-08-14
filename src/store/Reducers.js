import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import loading from './loading/reducer';
import product from './product/reducer';
import cart from './cart/reducer';

export default history =>
  combineReducers({
    loading,
    product,
    cart,
    router: connectRouter(history),
  });
