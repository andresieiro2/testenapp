import { push } from 'connected-react-router';
import * as types from './actionTypes';
import { setLoading } from '../loading/actions';

export const listLoaded = data => ({
  type: types.LIST_CART_LOADED,
  data,
  loading: false,
});

export const addProductToCart = data => ({
  type: types.ADD_PRODUCT_TO_CART,
  data,
});

export const setProduct = (data, index) => ({
  type: types.SET_PRODUCT,
  data,
  index,
});

export const updateProductOnCart = data => ({
  type: types.UPDATE_PRODUCT_ON_CART,
  data,
});

export const getList = () => {
  return async (dispatch, getState) => {
    const list = getState().cart.list;
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

export const editProduct = (product, index) => {
  return async (dispatch, getState) => {
    const list = getState().cart.list;
    const itemInCart = list[index];
    dispatch(setProduct(itemInCart, index));
    dispatch(push('carrinho/edit'));
  };
};

export const updateProduct = product => {
  return async (dispatch, getState) => {
    dispatch(updateProductOnCart(product));
    dispatch(push('/carrinho'));
  };
};
