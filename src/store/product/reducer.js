import * as types from './actionTypes';
import products from '../../data/products.json';

const initialState = {
  list: products,
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LIST_PRODUCTS_LOADED:
      return {
        ...state,
        list: action.data,
      };
    case types.SET_PRODUCT:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
}
