import * as types from './actionTypes';
import { setLoading } from '../loading/actions';

import * as cartActions from '../cart/actions';

export const listLoaded = data => ({
  type: types.LIST_PRODUCTS_LOADED,
  data,
  loading: false,
});

export const setProduct = data => ({
  type: types.SET_PRODUCT,
  data,
});

export const getList = () => {
  return async (dispatch, getState) => {
    const list = getState().product.list;
    dispatch(setLoading(true));

    try {
      await new Promise(resolve => {
        setTimeout(() => {
          resolve(list);
          dispatch(setLoading(false));
        }, 1000);
      });
    } catch (e) {
      dispatch(setLoading(false));
    }
  };
};

export const addProductToCart = product => {
  return async dispatch => {
    product.amount = product.multiple;
    dispatch(cartActions.addProductToCart(product));
  };
};
