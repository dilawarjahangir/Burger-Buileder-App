// src/redux/actions/cartActions.js
import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM } from '../actionTypes';

// Action to add item to cart
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

// Action to remove item from cart
export const removeItem = (item) => ({
  type: REMOVE_ITEM,
  payload: item,
})


export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};
