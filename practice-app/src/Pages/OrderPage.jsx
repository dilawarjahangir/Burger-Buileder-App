import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrders } from '../redux/actions/order';
import Header from '../components/Layout/Header';

const OrderPage = () => {
  const dispatch = useDispatch();
  const { orders, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(getUserOrders());
  }, [dispatch]);

  return (<>
  <Header/>
    <div className="w-full">
      <h1 className="text-4xl font-bold text-center my-6">My Orders</h1>
      {error && <p className="text-red-600 text-center">{error}</p>}
      <div className="flex flex-col items-center">
        {orders.length === 0 ? (
          <p className="text-lg">You have no orders yet.</p>
        ) : (
          <div className="w-full max-w-3xl">
            {orders.map((order) => (
              <div
                key={order._id}
                className="bg-white p-6 rounded-lg shadow-lg my-4"
              >
                <h2 className="text-2xl font-bold mb-2">
                  Order ID: {order._id}
                </h2>
                <p className="mb-2">Name: {order.name}</p>
                <p className="mb-2">Street: {order.street}</p>
                <p className="mb-2">Zip Code: {order.zipCode}</p>
                <p className="mb-2">Country: {order.country}</p>
                <p className="mb-2">Total Price: ${order.totalprice}</p>
                <p className="mb-2">Delivery Method: {order.deliveryMethod}</p>
                <h3 className="text-xl font-bold mt-4">Items:</h3>
                <ul>
                  {Object.entries(order.cart).map(([item, details]) => (
                    <li key={item}>
                      {item}: {details.quantity} x ${details.price.toFixed(2)}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  </>
  );
};

export default OrderPage;
