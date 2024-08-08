import React, { useState } from "react";
import BurgerAnimation from "../components/Layout/BurgerAnimation";
import Header from "../components/Layout/Header";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { server } from "../server";
import { clearCart } from "../redux/actions/cart";

const CheckoutPage = () => {
  const [check, setCheck] = useState(false);
  const [message, setMessage] = useState("");
  const { user } = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const dispatch = useDispatch();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const street = event.target.street.value;
    const zipCode = event.target.zipCode.value;
    const country = event.target.country.value;
    const deliveryMethod = event.target.deliveryMethod.value;

    if (!name || !street || !zipCode || !country || !deliveryMethod) {
      setMessage("Please fill in all fields.");
      return;
    }
    let totalprice= totalPrice.toFixed(2);

    const orderData = {
      name,
      street,
      zipCode,
      country,
      user,
      deliveryMethod,
      cart,
      totalprice,
    };
    
    const config = { 
      headers: { "Content-Type": "application/json" },
      withCredentials: true 
    };
    
    try {
      const response = await axios.post(`${server}/order/create-order`, orderData, config);
      if(response.data.success){
        setMessage("Order created successfully!");
        dispatch(clearCart()); // Clear the cart
      } else {
        setMessage("Failed to create order. Please try again later.");
      }
    } catch (error) {
      setMessage("Failed to create order. Please try again.");
    }
  };

  return (
    <div className="w-full">
      <Header />
      <div className="flex-row w-full justify-center items-start">
        <br />
        <br />
        <div className="p-3">
          <h1 className="font-bold text-4xl text-center">
            We hope it tastes well!
          </h1>
        </div>
        <div>
          <BurgerAnimation />
        </div>
        <div>
          <div className="flex justify-center">
            <Link className="m-2 font-bold text-md text-red-700 p-1 w-[80px]" to="/">
              Cancel
            </Link>
            <button
              onClick={() => setCheck(true)}
              className="m-2 font-bold text-md text-green-700 p-1 w-[80px]"
            >
              Continue
            </button>
          </div>
          {check ? (
            <div className="flex items-center justify-center p-4 bg-white">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                <h1 className="text-xl font-bold text-center mb-4">
                  Enter your Contact Data
                </h1>
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="street"
                      placeholder="Street"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Zip Code"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="text"
                      name="country"
                      placeholder="Country"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <input
                      type="email"
                      name="email"
                      value={user.email}
                      readOnly
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
                    />
                  </div>
                  <div className="mb-4">
                    <select
                      name="deliveryMethod"
                      className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:border-blue-500"
                    >
                      <option value="fastest">Fastest</option>
                      <option value="cheapest">Cheapest</option>
                    </select>
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="w-full px-3 py-2 bg-gray-300 text-gray-500 font-bold hover:bg-gray-400"
                    >
                      ORDER
                    </button>
                  </div>
                </form>

                <div className="text-red-600 p-3 font-bold">{message}</div>
              </div>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
