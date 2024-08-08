import axios from 'axios';
import { server } from '../../server';
const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
const GET_ORDERS_FAIL = 'GET_ORDERS_FAIL';


export const getUserOrders = () => async (dispatch) => {
  try {
    const response= await axios.get(`${server}/order/my-orders`, {
      withCredentials: true,
    });
    dispatch({
      type: GET_ORDERS_SUCCESS,
      payload: response.data.orders,
    });
  } catch (error) {
    dispatch({
      type: GET_ORDERS_FAIL,
      payload: error.response.data.message,
    });
  }
};
