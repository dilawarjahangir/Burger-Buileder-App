import React, { useState } from "react";
import Header from "../components/Layout/Header";
import BurgerMaking from "../components/Layout/BurgerMaking.jsx";
import BurgerAnimation from "../components/Layout/BurgerAnimation.jsx";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HomePage = () => {
  const [open, setOpen] = useState(false);  // Set initial state as false

  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  
  return (
    <div>
      <Header active={1} />

      <BurgerAnimation />
      <BurgerMaking setOpen={setOpen} />

      {open && (
        <div className="w-full flex items-center justify-center z-20 h-[122.5%] absolute bg-[#00000076] top-0 left-0">
          <div className="bg-white w-[500px] p-3">
            <h1 className="font-bold">Your Order Summary</h1>
            <div className="p-4">
              <ul>
                <li>
                  Lettuce: {cart?.Lettuce?.quantity ? cart?.Lettuce?.quantity : "0"}
                </li>
                <li>
                  Bacon: {cart?.Bacon?.quantity ? cart?.Bacon?.quantity : "0"}
                </li>
                <li>
                  Cheese: {cart?.Cheese?.quantity ? cart?.Cheese?.quantity : "0"}
                </li>
                <li>
                  Meat: {cart?.Meat?.quantity ? cart?.Meat?.quantity : "0"}
                </li>
              </ul>
            </div>
            <div>
              <h2 className="font-bold">Total Price: ${totalPrice.toFixed(2)}</h2>
            </div>
            <div className="p-1 text-xl mb-5">
              <h2>Continue to checkout?</h2>
            </div>
            <div className="pl-1 flex">
              <button
                onClick={() => setOpen(false)}  // Added to close the summary
                className="m-2 font-bold text-md text-red-700 p-1 w-[80px]"
              >
                CANCEL
              </button>
              <Link to="/checkout" className="m-2 font-bold text-md text-green-700 p-1 w-[80px]">
                ORDER
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HomePage;
