import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../redux/actions/cart";
import { Link } from "react-router-dom";

const BurgerMaking = ({ setOpen }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.cart);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const { isAuthenticated } = useSelector((state) => state.user);

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };

  const itemPrices = {
    Lettuce: 3,
    Bacon: 4,
    Cheese: 1.5,
    Meat: 5,
  };

  return (
    <div className="bg-[#CF8F2E] relative w-full h-auto flex-col items-center justify-center p-5">
      <div className="text-center">
        <h1 className="text-lg">
          Current Price: <strong>${totalPrice.toFixed(2)}</strong>
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <div className="p-8">
          <div className="space-y-4">
            {Object.keys(itemPrices).map((item) => (
              <div
                key={item}
                className="flex w-[400px] justify-between items-center"
              >
                <span className="font-bold my-2 text-black">{item}</span>
                <div>
                  <button
                    onClick={() => handleRemoveItem(item)}
                    className="hover:bg-[#DAA972] bg-[#D39952] text-center mx-2 w-[80px] p-1 border-black h-[32px] text-white px-4"
                  >
                    Less
                  </button>
                  <button
                    onClick={() => handleAddItem(item)}
                    className="hover:bg-[#99703F] bg-[#8F5E1E] text-center mx-2 w-[80px] p-1 border-black h-[32px] text-white px-4"
                  >
                    More
                  </button>
                </div>
              </div>
            ))}
            <div className="flex justify-center mt-4">
              {isAuthenticated ? (
                <button
                  onClick={() => setOpen(true)}
                  className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-8 rounded"
                >
                  Order
                </button>
              ) : (
                <Link
                  to="/login"
                  className="bg-yellow-400 hover:bg-yellow-300 text-black py-2 px-8 rounded"
                >
                  LOGIN TO ORDER
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BurgerMaking;
