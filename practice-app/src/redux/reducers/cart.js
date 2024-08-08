import { ADD_ITEM, CLEAR_CART, REMOVE_ITEM } from '../actionTypes';

// Initial state of the cart
const initialState = {
  cart: JSON.parse(localStorage.getItem('cart')) || {},
  totalPrice: JSON.parse(localStorage.getItem('totalPrice')) || 0
};

// Prices of each item
const itemPrices = {
  Lettuce: 3,
  Bacon: 4,
  Cheese: 1.5,
  Meat: 5
};

// Calculate total price
const calculateTotalPrice = (cart) => {
  return Object.keys(cart).reduce((total, item) => {
    return total + cart[item].quantity * cart[item].price;
  }, 0);
};

// Cart reducer
const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM: {
      const newCartAdd = {
        ...state.cart,
        [action.payload]: {
          quantity: (state.cart[action.payload]?.quantity || 0) + 1,
          price: itemPrices[action.payload]
        }
      };
      const newTotalPriceAdd = calculateTotalPrice(newCartAdd);
      localStorage.setItem('cart', JSON.stringify(newCartAdd));
      localStorage.setItem('totalPrice', JSON.stringify(newTotalPriceAdd));
      return {
        ...state,
        cart: newCartAdd,
        totalPrice: newTotalPriceAdd
      };
    }

    case REMOVE_ITEM: {
      const newCartRemove = { ...state.cart };
      if (newCartRemove[action.payload] && newCartRemove[action.payload].quantity > 0) {
        newCartRemove[action.payload] = {
          quantity: newCartRemove[action.payload].quantity - 1,
          price: itemPrices[action.payload]
        };
        if (newCartRemove[action.payload].quantity === 0) {
          delete newCartRemove[action.payload];
        }
      }
      const newTotalPriceRemove = calculateTotalPrice(newCartRemove);
      localStorage.setItem('cart', JSON.stringify(newCartRemove));
      localStorage.setItem('totalPrice', JSON.stringify(newTotalPriceRemove));
      return {
        ...state,
        cart: newCartRemove,
        totalPrice: newTotalPriceRemove
      };
    }

    case CLEAR_CART: {
      localStorage.removeItem('cart');
      localStorage.removeItem('totalPrice');
      return {
        ...state,
        cart: {},
        totalPrice: 0
      };
    }


    default:
      return state;
  }
};

export default cartReducer;
