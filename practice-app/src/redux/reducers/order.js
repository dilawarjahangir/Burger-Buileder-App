const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
const GET_ORDERS_FAIL = 'GET_ORDERS_FAIL';

const initialState = {
  orders: [],
  error: null,
};

export const orderReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ORDERS_SUCCESS:
      return {
        ...state,
        orders: action.payload,
      };
    case GET_ORDERS_FAIL:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
