import * as types from './actionTypes';

const initialState = {
  list: [],
  data: {},
};

export default function reduce(state = initialState, action = {}) {
  switch (action.type) {
    case types.LIST_CART_LOADED:
      return {
        ...state,
        list: action.data,
      };
    case types.ADD_PRODUCT_TO_CART:
      const list = [...state.list];

      list.push(action.data);
      return {
        ...state,
        list,
      };
    case types.SET_PRODUCT:
      return {
        ...state,
        data: action.data,
        indexActual: action.index,
      };
    case types.UPDATE_PRODUCT_ON_CART:
      const newProduct = { ...state.data, ...action.data };
      const cart = [...state.list];
      cart[state.indexActual] = newProduct;

      return {
        ...state,
        list: cart,
        data: {},
      };

    default:
      return state;
  }
}
